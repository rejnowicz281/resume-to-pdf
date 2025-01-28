import { Resume } from "@/lib/types/resume";
import { getDuration } from "@/lib/utils/date";
import { js } from "@/lib/utils/general";
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";
import ListItem from "./list-item";

// Styles for the PDF document
const styles = StyleSheet.create({
    page: {
        fontFamily: "OpenSans",
        padding: 30,
        flexDirection: "row",
        fontSize: 9,
        gap: 20,
        lineHeight: 1.5
    },
    leftSection: {
        flex: 1,
        gap: 10
    },
    rightSection: {
        flex: 3
    },
    nameHeader: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10
    },
    bold: {
        fontWeight: "bold"
    },
    flexRow: {
        flexDirection: "row"
    },
    flexColumn: {
        flexDirection: "column"
    },

    link: {
        textDecoration: "none",
        color: "#000000"
    },
    date: {
        fontSize: 8,
        fontWeight: "bold"
    },
    privacySection: {
        marginTop: 20
    },
    privacyText: {
        color: "gray"
    }
});

export default function ResumeDocument({ resume }: { resume: Resume }) {
    Font.register({
        family: "OpenSans",
        fonts: [
            { src: "/fonts/Arial.ttf", fontWeight: "normal" },
            { src: "/fonts/Arial-Bold.ttf", fontWeight: "bold" }
        ]
    });
    const { t } = useTranslation();

    const filteredResume = { ...resume };

    filteredResume.workExperience = resume.workExperience.filter((exp) => !exp.hidden);
    filteredResume.education = resume.education.filter((edu) => !edu.hidden);
    filteredResume.languages = resume.languages.filter((lang) => !lang.hidden);
    filteredResume.training = resume.training.filter((cert) => !cert.hidden);
    filteredResume.activities = resume.activities.filter((act) => !act.hidden);
    filteredResume.links = resume.links.filter((link) => !link.hidden);

    const {
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
        training,
        skills,
        activities,
        interests,
        links,
        imageOptions,
        includeRodoClause,
        includeDataProcessingConsent
    } = filteredResume;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Section */}
                <View style={styles.leftSection}>
                    {imageOptions?.show && imageOptions?.url ? (
                        <Image
                            src={{
                                uri: imageOptions.url,
                                method: "GET",
                                headers: { "Cache-Control": "no-cache" },
                                body: ""
                            }}
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: "cover",
                                borderRadius: 50
                            }}
                        />
                    ) : null}

                    <View style={{ marginTop: 10 }}>
                        {email || phone || dateOfBirth || city || country ? (
                            <>
                                <Text style={styles.sectionTitle}>{t("resumePdf.contact")}</Text>
                                <View style={js(styles.flexColumn, { gap: 6 })}>
                                    {email ? (
                                        <View>
                                            <Text>E-Mail:</Text>
                                            <Text style={styles.bold}>{email}</Text>
                                        </View>
                                    ) : null}
                                    {phone ? (
                                        <View>
                                            <Text>{t("resumePdf.phone")}:</Text>
                                            <Text style={styles.bold}>{phone}</Text>
                                        </View>
                                    ) : null}
                                    {dateOfBirth ? (
                                        <View>
                                            <Text>{t("resumePdf.dateOfBirth")}:</Text>
                                            <Text>{dateOfBirth}</Text>
                                        </View>
                                    ) : null}
                                    {city || country ? (
                                        <View>
                                            <Text>{t("resumePdf.location")}:</Text>
                                            <Text>
                                                {city ? (
                                                    <>
                                                        {city}
                                                        {country ? ", " : null}
                                                    </>
                                                ) : null}
                                                {country}
                                            </Text>
                                        </View>
                                    ) : null}
                                </View>
                            </>
                        ) : null}
                    </View>

                    {/* Skills */}
                    {skills && skills.length > 0 ? (
                        <View style={{ borderTop: 0.5, marginTop: 10, paddingTop: 10, borderTopColor: "#D3D3D3" }}>
                            <Text style={styles.sectionTitle}>{t("resumePdf.skills")}</Text>
                            {skills.map((skill) => (
                                <View key={skill._id}>
                                    <ListItem>
                                        <Text
                                            style={{
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {skill.name}
                                        </Text>
                                    </ListItem>
                                </View>
                            ))}
                        </View>
                    ) : null}

                    {/* Languages */}
                    {languages && languages.length > 0 ? (
                        <View style={{ borderTop: 0.5, marginTop: 10, paddingTop: 10, borderTopColor: "#D3D3D3" }}>
                            <Text style={styles.sectionTitle}>{t("resumePdf.languages")}</Text>
                            {languages.map((language) => (
                                <View style={{ flexDirection: "row", gap: 6 }} key={language._id}>
                                    <Text>{language.language}:</Text>
                                    <Text>
                                        {language.level.split("").map((level, idx) => {
                                            return <Text key={idx}>{level}</Text>;
                                        })}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ) : null}
                </View>
                {/* Right Section */}
                <View style={styles.rightSection}>
                    {/* Name */}
                    {firstName || lastName ? <Text style={styles.nameHeader}>{`${firstName} ${lastName}`}</Text> : null}

                    {/* Work Experience */}
                    <View style={js(styles.flexColumn, { gap: 16 })}>
                        {workExperience && workExperience.length > 0 ? (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.workExperience")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {workExperience.map((experience) => (
                                        <View key={experience._id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <View style={js(styles.flexRow, { gap: 4 })}>
                                                <ListItem>
                                                    <Text style={styles.bold}>{experience.title}</Text>
                                                </ListItem>
                                                {experience.company ? (
                                                    <>
                                                        <Text>/</Text>
                                                        <Text>{experience.company}</Text>
                                                    </>
                                                ) : null}
                                                {experience.location ? (
                                                    <>
                                                        <Text>/</Text>
                                                        <Text>{experience.location}</Text>
                                                    </>
                                                ) : null}
                                            </View>
                                            <View style={js(styles.flexRow, { gap: 3 })}>
                                                <Text style={styles.date}>
                                                    {experience.startDate} - {experience.endDate || t("present")}
                                                </Text>
                                                <Text style={{ fontSize: 8 }}>[{getDuration(experience)}]</Text>
                                            </View>
                                            {experience.description ? (
                                                <Text style={{ marginTop: 4 }}>{experience.description}</Text>
                                            ) : null}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ) : null}
                        {/* Education */}
                        {education && education.length > 0 ? (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.education.title")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {education.map((edu) => (
                                        <View key={edu._id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <ListItem>
                                                <Text style={styles.bold}>{edu.institution}</Text>
                                            </ListItem>
                                            <View style={js(styles.flexRow, { gap: 3 })}>
                                                <Text style={styles.date}>
                                                    {edu.startDate} - {edu.endDate || t("present")}
                                                </Text>
                                                <Text style={{ fontSize: 8 }}>[{getDuration(edu)}]</Text>
                                            </View>
                                            {edu.specialization ? (
                                                <Text>
                                                    {t("resumePdf.education.specialization")}: {edu.specialization}
                                                </Text>
                                            ) : null}
                                            <Text>
                                                {t("resumePdf.education.level")}: {edu.level}
                                            </Text>
                                            {edu.description ? (
                                                <Text style={{ marginTop: 4 }}>{edu.description}</Text>
                                            ) : null}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ) : null}
                        {/* Training and Certification */}
                        {training && training.length > 0 ? (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.training.title")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {training.map((cert) => (
                                        <View key={cert._id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <ListItem>
                                                <Text style={styles.bold}>{cert.name}</Text>
                                            </ListItem>
                                            <Text style={styles.date}>{cert.issueDate}</Text>
                                            <Text>
                                                {t("resumePdf.training.organization")}: {cert.organization}
                                            </Text>
                                            {cert.description ? (
                                                <Text style={{ marginTop: 4 }}>{cert.description}</Text>
                                            ) : null}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ) : null}
                        {/* Additional Activities */}
                        {activities && activities.length > 0 ? (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.additionalActivity")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {activities.map((activity) => (
                                        <View key={activity._id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <View style={js(styles.flexRow, { gap: 4 })}>
                                                <ListItem>
                                                    <Text style={styles.bold}>{activity.name}</Text>
                                                </ListItem>
                                                {activity.location ? (
                                                    <>
                                                        <Text>/</Text>
                                                        <Text>{activity.location}</Text>
                                                    </>
                                                ) : null}
                                            </View>
                                            <View style={js(styles.flexRow, { gap: 3 })}>
                                                <Text style={styles.date}>
                                                    {activity.startDate} - {activity.endDate || t("present")}
                                                </Text>
                                                <Text style={{ fontSize: 8 }}>[{getDuration(activity)}]</Text>
                                            </View>
                                            {activity.description ? (
                                                <Text style={{ marginTop: 4 }}>{activity.description}</Text>
                                            ) : null}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ) : null}
                        {/* Interests */}
                        {interests ? (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.interests")}</Text>
                                <Text>{interests}</Text>
                            </View>
                        ) : null}
                        {/* Links */}
                        {links && links.length > 0 ? (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.links")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {links.map((link) => (
                                        <View key={link._id} style={js(styles.flexColumn, { gap: 1 })}>
                                            {link.description ? (
                                                <Text style={styles.bold}>{link.description}</Text>
                                            ) : null}
                                            <Link style={styles.link} src={link.url}>
                                                {link.url}
                                            </Link>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ) : null}
                        {/* Confidentiality */}
                        {includeRodoClause || includeDataProcessingConsent ? (
                            <View style={styles.privacySection}>
                                {includeRodoClause ? (
                                    <Text style={styles.privacyText}>{t("resumePdf.rodoClause")}</Text>
                                ) : null}
                                {includeDataProcessingConsent ? (
                                    <Text style={styles.privacyText}>
                                        {t("resumePdf.consentToFurtherDataProcessing")}
                                    </Text>
                                ) : null}
                            </View>
                        ) : null}
                    </View>
                </View>
            </Page>
        </Document>
    );
}
