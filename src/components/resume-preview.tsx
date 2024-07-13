import { useResumeCreator } from "@/providers/resume-creator-provider";

export default function ResumePreview() {
    const {
        showImage,
        firstName,
        lastName,
        dateOfBirth,
        country,
        city,
        email,
        phone,
        workExperience,
        education,
        languages,
        trainingAndCertification,
        skills,
        additionalActivities,
        interests,
        links
    } = useResumeCreator();

    return (
        <div id="resume-preview">
            <div className="flex gap-8 p-8 text-sm">
                <div className="flex flex-col gap-8 flex-3">
                    {showImage && <div className="bg-gray-200 h-[200px] w-[200px] rounded-full"></div>}
                    <div className="flex flex-col gap-6 pr-20">
                        <h2 className="text-xl font-semibold">Contact</h2>
                        <div className="flex flex-col gap-2">
                            <div>
                                <div>E-Mail:</div>
                                <div className="font-semibold">{email}</div>
                            </div>
                            {phone && (
                                <div>
                                    <div>Phone:</div>
                                    <div className="font-semibold">{phone}</div>
                                </div>
                            )}
                            {dateOfBirth && (
                                <div>
                                    <div>Date of Birth:</div>
                                    <div>{dateOfBirth}</div>
                                </div>
                            )}
                            {(city || country) && (
                                <div>
                                    <div>Location:</div>
                                    <div>
                                        {city && <span>{city}</span>}
                                        {city && country && <span>, </span>}
                                        {country && <span>{country}</span>}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {skills.length > 0 && (
                        <div className="flex flex-col gap-6 border-t border-t-neutral-200 pt-3">
                            <h2 className="text-xl font-semibold">Skills</h2>
                            <div>
                                {skills.map((skill, idx) => (
                                    <ul className="list-disc" key={idx}>
                                        <li className="font-semibold">{skill}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    )}
                    {languages.length > 0 && (
                        <div className="flex flex-col gap-6 border-t border-t-neutral-200 pt-3">
                            <h2 className="text-xl font-semibold">Languages</h2>
                            <div>
                                {languages.map((language, idx) => (
                                    <div key={idx}>
                                        <div>
                                            {language.language}: {language.level}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-8 flex-3">
                    <h1 className="text-4xl font-semibold">
                        {firstName} {lastName}
                    </h1>
                    <div className="flex flex-col gap-8">
                        {workExperience.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold">Work Experience</h2>
                                <div className="flex flex-col gap-4">
                                    {workExperience.map((experience, idx) => (
                                        <div key={idx}>
                                            <div className="flex gap-2">
                                                <h3 className="font-semibold">
                                                    <ul className="list-disc">
                                                        <li>{experience.title}</li>
                                                    </ul>
                                                </h3>
                                                {experience.company && (
                                                    <>
                                                        <div>/</div>
                                                        <div>{experience.company}</div>
                                                    </>
                                                )}
                                                <div>/</div>
                                                <div>{experience.location}</div>
                                            </div>
                                            <div className="flex">
                                                {experience.startDate} - {experience.endDate || "Present"}
                                                {/* to do - calculate length like this: [3 months]*/}
                                            </div>
                                            {experience.description && (
                                                <div className="mt-2">
                                                    <div>Description:</div>
                                                    <p>{experience.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {education.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold">Education</h2>
                                <div className="flex flex-col gap-4">
                                    {education.map((education, idx) => (
                                        <div key={idx}>
                                            <div>
                                                <h3 className="font-semibold">
                                                    <ul className="list-disc">
                                                        <li>{education.institution}</li>
                                                    </ul>
                                                </h3>
                                                <div>
                                                    {education.startDate} - {education.endDate || "Present"}
                                                    {/* to do - calculate length like this: [3 months]*/}
                                                </div>
                                                {education.specialization && (
                                                    <div>Specialization: {education.specialization}</div>
                                                )}
                                                <div>Level of education: {education.level}</div>
                                                {education.description && (
                                                    <div className="mt-2">
                                                        <div>Description:</div>
                                                        <p>{education.description}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {trainingAndCertification.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold">Training and Certification</h2>
                                <div className="flex flex-col gap-4">
                                    {trainingAndCertification.map((info, idx) => (
                                        <div key={idx}>
                                            <h3 className="font-semibold">
                                                <ul className="list-disc">
                                                    <li>{info.name}</li>
                                                </ul>
                                            </h3>
                                            <div>{info.issueDate}</div>
                                            <div>Organization: {info.organization}</div>
                                            {info.description && (
                                                <div className="mt-2">
                                                    <div>Description:</div>
                                                    <p>{info.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {additionalActivities.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold">Additional Activities</h2>
                                <div className="flex flex-col gap-4">
                                    {additionalActivities.map((activity, idx) => (
                                        <div key={idx}>
                                            <div className="flex gap-2">
                                                <h3 className="font-semibold">
                                                    <ul className="list-disc">
                                                        <li>{activity.name}</li>
                                                    </ul>
                                                </h3>
                                                {activity.location && (
                                                    <>
                                                        <div>/</div>
                                                        <div>{activity.location}</div>
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex">
                                                {activity.startDate} - {activity.endDate || "Present"}
                                                {/* to do - calculate length like this: [3 months]*/}
                                            </div>
                                            {activity.description && (
                                                <div>
                                                    <div>Description:</div>
                                                    <p>{activity.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {interests.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold">Interests</h2>
                                <p>{interests}</p>
                            </div>
                        )}
                        {links.length > 0 && (
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold">Links</h2>
                                <ul className="list-disc flex flex-col gap-4">
                                    {links.map((link, idx) => (
                                        <li key={idx}>
                                            {link.description && <h3 className="font-semibold">{link.description}</h3>}
                                            <a href={link.url} target="_blank" rel="noreferrer">
                                                {link.url}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
