import { Container, createStyles, Grid, Text } from "@mantine/core";

interface IPropfileBodyProps {
    userId: string
}

const useStyles = createStyles((theme) => ({
    greet: {
        fontSize: "30px",
        fontWeight: "bold",
        fontFamily: 'Montserrat'
    }
}))

export default function ProfileBody() {
   const {classes} = useStyles()
    return (
        <Container my="md">
            <Grid>
                <Grid.Col xs={12}>
                    <Text className={classes.greet} size="lg">
                        Hello 👋, 
                    </Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}