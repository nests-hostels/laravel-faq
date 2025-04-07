import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import {Head, Link} from '@inertiajs/react';
import UpdateInformationForm from './Partials/UpdateInformationForm';

export default function Edit({
    faq,
}: PageProps<{ faq?: object }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Faq's
                </h2>
            }
        >
            <Head title="Faq" />

            <div className="py-12 flex justify-center items-center">
                <div>
                    <Link href={route('faq.edit', faq.id - 1 > 0 ? faq.id - 1 : 1)}>
                        Prev.
                    </Link>
                </div>
                <div className="w-5xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <UpdateInformationForm
                            faq={faq}
                        />
                    </div>
                </div>
                <div>
                    <Link href={route('faq.edit', faq.id + 1)}>
                        Next.
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
