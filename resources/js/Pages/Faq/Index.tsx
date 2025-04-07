import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import UpdateInformationForm from './Partials/UpdateInformationForm';
import { Faq } from '@/types/faq'; // Import the Faq interface from the shared types file

export default function Edit({
    faqs,
}: PageProps<{ faqs: Faq[] }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Faq's
                </h2>
            }
        >
            <Head title="Faq" />

            <div className="py-12 flex">

                <div className="max-w-5xl mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 dark:bg-gray-800">
                        <ul>
                            {faqs.map(faq => (<li className="border rounded-md border-indigo-400 my-4 p-4 dark:text-white">
                                <Link href={route('faq.edit', faq.id)}>
                                    <h3 className="text-2xl">{faq.question}</h3>

                                    <h4 className="text-md">{faq.answer}</h4>
                                </Link>
                            </li>))}
                        </ul>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
