import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    item: {
        position: "relative"
    },
    dot: {
        position: "absolute",
        left: -7,
        fontSize: 10
    }
});

export default function ListItem({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.item}>
            <Text style={styles.dot}>{"\u2022"}</Text>

            <Text>{children}</Text>
        </View>
    );
}
