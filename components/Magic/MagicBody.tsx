import { Container, createStyles, Group, Paper, Text, TextInput } from "@mantine/core";
import { Auth } from "@supabase/ui";
import { useSupabaseClient } from "../../lib/supabase";


const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 26,
        fontWeight: 900,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
}));

export default function MagicBody() {
    const { classes } = useStyles();
    const supabaseClient = useSupabaseClient();

    return (
        <Container size={460} my={30}>
            <Text className={classes.title} align="center">
                
            </Text>
            <Auth supabaseClient={supabaseClient} redirectTo="/" />
        </Container>
    )
}