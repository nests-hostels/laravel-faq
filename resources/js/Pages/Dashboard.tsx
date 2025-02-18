import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Dashboard() {
    // Recupera i dati dalla pagina tramite Inertia
    // const { users } = usePage().props as { users: User[] }; 
    const { users } = usePage().props as unknown as { users: User[] };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard obiv
                </h2>
            }
        >
            <Head title="Dashboard obiv" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>

                        <div className="p-6 bg-gray-100 dark:bg-gray-700 dark:text-white">
                            <ul>
                                {users.map((user, index) => (
                                    <li key={index} className="mb-2">
                                        <span className="font-bold">#{user.id} - {user.name}</span> - <span>{user.email}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
