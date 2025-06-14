import { Switch } from "@/components/ui/switch";
import { usePouchDB } from "@/providers/pouchdb-provider";
import { useResumeCreator } from "@/providers/resume-creator-provider";
import { Camera, Trash2 } from "lucide-react";
import { useRef } from "react";

const ImagePicker = () => {
    const { resume, setImageOptions, t } = useResumeCreator();
    const inputRef = useRef<HTMLInputElement>(null);

    const { db } = usePouchDB();

    const { show, url } = resume.imageOptions;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const maxSizeInBytes = 6 * 1024 * 1024; // 6MB

            if (file.size > maxSizeInBytes) {
                alert("Image is too large. Max image size is 6MB.");
                return;
            }

            const reader = new FileReader();

            reader.onload = function (event) {
                const newImageOptions = { show: true, url: event.target?.result as string };
                setImageOptions(newImageOptions);
                db.put({ ...resume, imageOptions: newImageOptions });
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        const newImageOptions = { show: false, url: "" };
        setImageOptions(newImageOptions);
        db.put({ ...resume, imageOptions: newImageOptions });
        if (inputRef.current) inputRef.current.value = "";
    };

    const handleCheckedChange = () => {
        const newImageOptions = { show: !show, url };
        setImageOptions(newImageOptions);
        db.put({ ...resume, imageOptions: newImageOptions });
    };

    return (
        <>
            {url ? (
                <div className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center">
                        <Switch checked={show} onCheckedChange={handleCheckedChange} />
                        <span className="font-semibold text-sm">
                            {t("resumeCreator.stepOne.imagePicker.showImage")}
                        </span>
                    </div>

                    <button
                        onClick={handleRemoveImage}
                        className="rounded-[50%] w-[200px] h-[200px] relative group bg-gray-50"
                    >
                        <img
                            src={url}
                            className="rounded-[50%] w-full h-full object-cover inset-0 cursor-pointer group-hover:opacity-5 transition-opacity"
                        />
                        <div className="absolute pointer-events-none inset-0 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                            <Trash2 size={50} className="text-red-700" />
                        </div>
                    </button>
                </div>
            ) : (
                <button className="flex flex-col items-center relative hover:opacity-70 transition-opacity gap-6 max-w-[400px] p-9 w-full border border-dashed rounded-xl border-neutral-300 dark:border-neutral-600">
                    <input
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        ref={inputRef}
                        type="file"
                        name="avatar"
                        onChange={handleImageChange}
                        accept="image/jpeg, image/png"
                    />
                    <div className="flex flex-col items-center">
                        <Camera size={50} className="text-gray-700 dark:text-gray-300" />
                        <div className="text-gray-700 dark:text-gray-300">
                            {t("resumeCreator.stepOne.imagePicker.upload")}
                        </div>
                        <span className="text-center text-gray-500 text-sm">
                            {t("resumeCreator.stepOne.imagePicker.uploadOr")}
                        </span>
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                        {t("resumeCreator.stepOne.imagePicker.supportedFormats")}
                    </div>
                </button>
            )}
        </>
    );
};

export default ImagePicker;
