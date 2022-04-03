import { AppShell } from "@mantine/core";
import React from "react"
import { LayoutHeader } from "./LayoutHeader";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <AppShell
            header={<LayoutHeader links={[
                {
                    label: "Home",
                    link: "/"
                },
                {
                    label: "Random",
                    link: "/random"
                }

            ]} />}
        >
            {children}
        </AppShell>
    )
}