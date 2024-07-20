import { Resume } from "@/lib/types/resume";
import { js } from "@/lib/utils/general";
import { Document, Font, Image, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
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
            { src: "/resume-to-pdf/fonts/Arial.ttf", fontWeight: "normal" },
            { src: "/resume-to-pdf/fonts/Arial-Bold.ttf", fontWeight: "bold" }
        ]
    });

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
                                borderRadius: 50,
                                marginBottom: 10
                            }}
                        />
                    )}

                    <View>
                        {(email || phone || dateOfBirth || city || country) && (
                            <>
                                <Text style={styles.sectionTitle}>Contact</Text>
                                <View style={js(styles.flexColumn, { gap: 6 })}>
                                    {!!email && (
                                        <View>
                                            <Text>E-Mail:</Text>
                                            <Text style={styles.bold}>{email}</Text>
                                        </View>
                                    )}
                                    {!!phone && (
                                        <View>
                                            <Text>Phone:</Text>
                                            <Text style={styles.bold}>{phone}</Text>
                                        </View>
                                    )}
                                    {!!dateOfBirth && (
                                        <View>
                                            <Text>Date of Birth:</Text>
                                            <Text>{dateOfBirth}</Text>
                                        </View>
                                    )}
                                    {(city || country) && (
                                        <View>
                                            <Text>Location:</Text>
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
                            <Text style={styles.sectionTitle}>Skills</Text>
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
                            <Text style={styles.sectionTitle}>Languages</Text>
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
                                <Text style={styles.sectionTitle}>Work Experience</Text>
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
                                <Text style={styles.sectionTitle}>Education</Text>
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
                                            {edu.specialization && <Text>Specialization: {edu.specialization}</Text>}
                                            <Text>Level of education: {edu.level}</Text>
                                            {edu.description && <Text style={{ marginTop: 4 }}>{edu.description}</Text>}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Training and Certification */}
                        {training && training.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Training and Certification</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {training.map((cert) => (
                                        <View key={cert.id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <ListItem>
                                                <Text style={styles.bold}>{cert.name}</Text>
                                            </ListItem>
                                            <Text style={styles.date}>{cert.issueDate}</Text>
                                            <Text>Organization: {cert.organization}</Text>
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
                                <Text style={styles.sectionTitle}>Additional Activities</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {activities.map((activity) => (
                                        <View key={activity.id} style={js(styles.flexColumn, { gap: 1 })}>
                                            <Text style={styles.bold}>{activity.name}</Text>
                                            {activity.location && <Text>{activity.location}</Text>}
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
                                <Text style={styles.sectionTitle}>Interests</Text>
                                <Text>{interests}</Text>
                            </View>
                        )}
                        {/* Links */}
                        {links && links.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Links</Text>
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
