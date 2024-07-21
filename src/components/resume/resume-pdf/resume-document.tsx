import { Resume } from "@/lib/types/resume";
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
        imageOptions
    } = resume;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Section */}
                <View style={styles.leftSection}>
                    {imageOptions.show && imageOptions.url && (
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
                    )}

                    <View style={{ marginTop: 10 }}>
                        {(email || phone || dateOfBirth || city || country) && (
                            <>
                                <Text style={styles.sectionTitle}>{t("resumePdf.contact")}</Text>
                                <View style={js(styles.flexColumn, { gap: 6 })}>
                                    {!!email && (
                                        <View>
                                            <Text>E-Mail:</Text>
                                            <Text style={styles.bold}>{email}</Text>
                                        </View>
                                    )}
                                    {!!phone && (
                                        <View>
                                            <Text>{t("resumePdf.phone")}:</Text>
                                            <Text style={styles.bold}>{phone}</Text>
                                        </View>
                                    )}
                                    {!!dateOfBirth && (
                                        <View>
                                            <Text>{t("resumePdf.dateOfBirth")}:</Text>
                                            <Text>{dateOfBirth}</Text>
                                        </View>
                                    )}
                                    {(city || country) && (
                                        <View>
                                            <Text>{t("resumePdf.location")}:</Text>
                                            <Text>
                                                {city && (
                                                    <>
                                                        {city}
                                                        {country && ", "}
                                                    </>
                                                )}
                                                {country}
                                            </Text>
                                        </View>
                                    )}
                                </View>
                            </>
                        )}
                    </View>

                    {/* Skills */}
                    {skills && skills.length > 0 && (
                        <View style={{ borderTop: 0.5, marginTop: 10, paddingTop: 10, borderTopColor: "#D3D3D3" }}>
                            <Text style={styles.sectionTitle}>{t("resumePdf.skills")}</Text>
                            {skills.map((skill) => (
                                <View key={skill.id}>
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
                    )}

                    {/* Languages */}
                    {languages && languages.length > 0 && (
                        <View style={{ borderTop: 0.5, marginTop: 10, paddingTop: 10, borderTopColor: "#D3D3D3" }}>
                            <Text style={styles.sectionTitle}>{t("resumePdf.languages")}</Text>
                            {languages.map((language) => (
                                <Text key={language.id}>
                                    {language.language}: {language.level}
                                </Text>
                            ))}
                        </View>
                    )}
                </View>

                {/* Right Section */}
                <View style={styles.rightSection}>
                    {/* Name */}
                    {(firstName || lastName) && <Text style={styles.nameHeader}>{`${firstName} ${lastName}`}</Text>}

                    {/* Work Experience */}
                    <View style={js(styles.flexColumn, { gap: 16 })}>
                        {workExperience && workExperience.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.workExperience")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {workExperience.map((experience) => (
                                        <View key={experience.id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <View style={js(styles.flexRow, { gap: 4 })}>
                                                <ListItem>
                                                    <Text style={styles.bold}>{experience.title}</Text>
                                                </ListItem>
                                                {experience.company && (
                                                    <>
                                                        <Text>/</Text>
                                                        <Text>{experience.company}</Text>
                                                    </>
                                                )}
                                                {experience.location && (
                                                    <>
                                                        <Text>/</Text>
                                                        <Text>{experience.location}</Text>
                                                    </>
                                                )}
                                            </View>
                                            <View style={js(styles.flexRow, { gap: 3 })}>
                                                <Text style={styles.date}>
                                                    {experience.startDate} - {experience.endDate || "Present"}
                                                </Text>
                                                <Text style={{ fontSize: 8 }}>[{experience.duration}]</Text>
                                            </View>
                                            {experience.description && (
                                                <Text style={{ marginTop: 4 }}>{experience.description}</Text>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Education */}
                        {education && education.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.education.title")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {education.map((edu) => (
                                        <View key={edu.id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <ListItem>
                                                <Text style={styles.bold}>{edu.institution}</Text>
                                            </ListItem>
                                            <View style={js(styles.flexRow, { gap: 3 })}>
                                                <Text style={styles.date}>
                                                    {edu.startDate} - {edu.endDate || "Present"}
                                                </Text>
                                                <Text style={{ fontSize: 8 }}>[{edu.duration}]</Text>
                                            </View>
                                            {edu.specialization && (
                                                <Text>
                                                    {t("resumePdf.education.specialization")}: {edu.specialization}
                                                </Text>
                                            )}
                                            <Text>
                                                {t("resumePdf.education.level")}: {edu.level}
                                            </Text>
                                            {edu.description && <Text style={{ marginTop: 4 }}>{edu.description}</Text>}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Training and Certification */}
                        {training && training.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.training.title")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {training.map((cert) => (
                                        <View key={cert.id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <ListItem>
                                                <Text style={styles.bold}>{cert.name}</Text>
                                            </ListItem>
                                            <Text style={styles.date}>{cert.issueDate}</Text>
                                            <Text>
                                                {t("resumePdf.training.organization")}: {cert.organization}
                                            </Text>
                                            {cert.description && (
                                                <Text style={{ marginTop: 4 }}>{cert.description}</Text>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Additional Activities */}
                        {activities && activities.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.additionalActivity")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {activities.map((activity) => (
                                        <View key={activity.id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <View style={js(styles.flexRow, { gap: 4 })}>
                                                <ListItem>
                                                    <Text style={styles.bold}>{activity.name}</Text>
                                                </ListItem>
                                                {activity.location && (
                                                    <>
                                                        <Text>/</Text>
                                                        <Text>{activity.location}</Text>
                                                    </>
                                                )}
                                            </View>
                                            <View style={js(styles.flexRow, { gap: 3 })}>
                                                <Text style={styles.date}>
                                                    {activity.startDate} - {activity.endDate || "Present"}
                                                </Text>
                                                <Text style={{ fontSize: 8 }}>[{activity.duration}]</Text>
                                            </View>
                                            {activity.description && (
                                                <Text style={{ marginTop: 4 }}>{activity.description}</Text>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Interests */}
                        {!!interests && (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.interests")}</Text>
                                <Text>{interests}</Text>
                            </View>
                        )}
                        {/* Links */}
                        {links && links.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>{t("resumePdf.links")}</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {links.map((link) => (
                                        <View key={link.id} style={js(styles.flexColumn, { gap: 1 })}>
                                            {link.description && <Text style={styles.bold}>{link.description}</Text>}
                                            <Link style={styles.link} src={link.url}>
                                                {link.url}
                                            </Link>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </Page>
        </Document>
    );
}
