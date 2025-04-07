import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation({
    faq,
    className
}: {
    faq?: object;
    className?: string;
}) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            question: faq.question,
            answer: faq.answer
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('faq.update', faq.id));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Faq data
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update the FAQ #{faq.id}
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="question" value="Question" />

                    <TextInput
                        id="question"
                        className="mt-1 block w-full"
                        value={data.question}
                        onChange={(e) => setData('question', e.target.value)}
                        required
                        isFocused
                        autoComplete="question"
                    />

                    <InputError className="mt-2" message={errors.question} />
                </div>

                <div>
                    <InputLabel htmlFor="answer" value="Answer" />

                    <TextArea
                        value={data.answer}
                        id="answer"
                        className="mt-1 block w-full"
                        onChange={(e) => setData('answer', e.target.value)}
                        required
                        isFocused
                        autoComplete="answer"
                    />

                    <InputError className="mt-2" message={errors.answer} />
                </div>

                <div className="flex items-center justify-end gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
