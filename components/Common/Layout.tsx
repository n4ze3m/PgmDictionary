import { AppShell } from "@mantine/core";
import { Auth } from "@supabase/ui";
import React from "react"
import { LayoutHeader } from "./LayoutHeader";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const { user } = Auth.useUser();
    const [links, setLinks] = React.useState<{ link: string; label: string }[]>([
        {
            label: "Authenticate",
            link: "/auth"
        }
    ]);

    React.useEffect(() => {
        if (user === null) {
            setLinks([
                {
                    label: "Authenticate",
                    link: "/auth"
                }
            ])
        } else {
            setLinks([
                // {
                //     label: "Profile",
                //     link: "/profile"
                // },
                {
                    label: "Logout",
                    link: "/logout"
                }
            ])
        }
    }, [user])
    

    return (
        <AppShell
            header={<LayoutHeader links={links} />}
        >
            {children}
        </AppShell>
    )
}