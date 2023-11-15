'use client'
import { Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Carticon from '../Carticon/Carticon';
import classes from './Navbar.module.css';

export function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const path = usePathname();


    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Link href="/">
                    <h1 className='text-2xl font-black text-gray-700'>Baper Dokan</h1>
                </Link>
                <Group gap={5} className='gap-10'>
                    <Carticon />
                </Group>
            </Container>
        </header>
    );
}