import { js } from "@/lib/utils";
import {
    AdditionalActivity,
    Education,
    Language,
    Link as ResumeLink,
    TrainingAndCertification,
    WorkExperience
} from "@/providers/resume-creator-provider";
import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import ListItem from "./list-item";

// Styles for the PDF document
const styles = StyleSheet.create({
    page: {
        fontFamily: "OpenSans",
        padding: 30,
        flexDirection: "row",
        fontSize: 9
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
        fontWeight: "semibold",
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10
    },
    semibold: {
        fontWeight: "semibold"
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
    imagePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#D7D7D7",
        marginBottom: 10
    },
    link: {
        textDecoration: "none",
        color: "#000000"
    }
});

export default function ResumePDF({
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
}: {
    showImage: boolean;
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
    country?: string;
    city?: string;
    email: string;
    phone?: string;
    workExperience: WorkExperience[];
    education: Education[];
    languages: Language[];
    trainingAndCertification: TrainingAndCertification[];
    skills: string[];
    additionalActivities: AdditionalActivity[];
    interests: string;
    links: ResumeLink[];
}) {
    Font.register({
        family: "OpenSans",
        fonts: [
            { src: "/fonts/OpenSans-Regular.ttf", fontWeight: "normal" },
            { src: "/fonts/OpenSans-SemiBold.ttf", fontWeight: "semibold" },
            { src: "/fonts/OpenSans-Bold.ttf", fontWeight: "bold" }
        ]
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Section */}
                <View style={js(styles.leftSection, { paddingRight: 20 })}>
                    {showImage && <View style={styles.imagePlaceholder} />}

                    <View style={{ paddingTop: 10 }}>
                        <Text style={styles.sectionTitle}>Contact</Text>
                        <View style={js(styles.flexColumn, { gap: 6 })}>
                            {email && (
                                <View>
                                    <Text style={{ marginBottom: 2 }}>E-Mail:</Text>
                                    <Text style={styles.bold}>{email}</Text>
                                </View>
                            )}
                            {phone && (
                                <View>
                                    <Text style={{ marginBottom: 2 }}>Phone:</Text>
                                    <Text style={styles.bold}>{phone}</Text>
                                </View>
                            )}
                            {dateOfBirth && (
                                <View>
                                    <Text style={{ marginBottom: 2 }}>Date of Birth:</Text>
                                    <Text>{dateOfBirth}</Text>
                                </View>
                            )}
                            {(city || country) && (
                                <View>
                                    <Text style={{ marginBottom: 2 }}>Location:</Text>
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
                    </View>

                    {/* Skills */}
                    {skills.length > 0 && (
                        <View style={{ borderTop: 0.5, marginTop: 10, paddingTop: 10, borderTopColor: "#D3D3D3" }}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            {skills.map((skill, idx) => (
                                <View>
                                    <Text
                                        key={idx}
                                        style={{
                                            fontSize: 9,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {skill}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Languages */}
                    {languages.length > 0 && (
                        <View style={{ borderTop: 0.5, marginTop: 10, paddingTop: 10, borderTopColor: "#D3D3D3" }}>
                            <Text style={styles.sectionTitle}>Languages</Text>
                            {languages.map((language, idx) => (
                                <Text key={idx}>
                                    {language.language}: {language.level}
                                </Text>
                            ))}
                        </View>
                    )}
                </View>

                {/* Right Section */}
                <View style={styles.rightSection}>
                    {/* Name */}
                    <Text style={styles.nameHeader}>{`${firstName} ${lastName}`}</Text>

                    {/* Work Experience */}
                    <View style={js(styles.flexColumn, { gap: 16 })}>
                        {workExperience.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Work Experience</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {workExperience.map((experience, idx) => (
                                        <View key={idx} style={js(styles.flexColumn, { gap: 1 })}>
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
                                            <Text>
                                                {experience.startDate} - {experience.endDate || "Present"}
                                            </Text>
                                            {experience.description && (
                                                <View style={{ marginTop: 4 }}>
                                                    <Text>Description:</Text>
                                                    <Text>{experience.description}</Text>
                                                </View>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Education */}
                        {education.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Education</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {education.map((edu, idx) => (
                                        <View key={idx} style={js(styles.flexColumn, { gap: 1 })}>
                                            <Text style={styles.bold}>{edu.institution}</Text>
                                            <Text>
                                                {edu.startDate} - {edu.endDate || "Present"}
                                            </Text>
                                            {edu.specialization && <Text>Specialization: {edu.specialization}</Text>}
                                            <Text>Level of education: {edu.level}</Text>
                                            {edu.description && (
                                                <View style={{ marginTop: 4 }}>
                                                    <Text>Description:</Text>
                                                    <Text>{edu.description}</Text>
                                                </View>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Training and Certification */}
                        {trainingAndCertification.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Training and Certification</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {trainingAndCertification.map((cert, idx) => (
                                        <View key={idx} style={js(styles.flexColumn, { gap: 1 })}>
                                            <Text style={styles.bold}>{cert.name}</Text>
                                            <Text>{cert.issueDate}</Text>
                                            <Text>Organization: {cert.organization}</Text>
                                            {cert.description && (
                                                <View style={{ marginTop: 4 }}>
                                                    <Text>Description:</Text>
                                                    <Text>{cert.description}</Text>
                                                </View>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Additional Activities */}
                        {additionalActivities.length < 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Additional Activities</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {additionalActivities.map((activity, idx) => (
                                        <View key={idx} style={js(styles.flexColumn, { gap: 1 })}>
                                            <Text style={styles.bold}>{activity.name}</Text>
                                            {activity.location && <Text>{activity.location}</Text>}
                                            <Text>
                                                {activity.startDate} - {activity.endDate || "Present"}
                                            </Text>
                                            {activity.description && (
                                                <View style={{ marginTop: 4 }}>
                                                    <Text>Description:</Text>
                                                    <Text>{activity.description}</Text>
                                                </View>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {/* Interests */}
                        {interests.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Interests</Text>
                                <Text>{interests}</Text>
                            </View>
                        )}
                        {/* Links */}
                        {links.length > 0 && (
                            <View>
                                <Text style={styles.sectionTitle}>Links</Text>
                                <View style={js(styles.flexColumn, { gap: 12 })}>
                                    {links.map((link, idx) => (
                                        <View key={idx} style={js(styles.flexColumn, { gap: 1 })}>
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
