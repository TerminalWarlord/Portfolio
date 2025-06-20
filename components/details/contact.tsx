"use client";

import { useState } from "react";

const ACCESS_KEY = 'b220126a-abbe-4379-a69b-faed8b474be0'; // Its not an API key, rather an access key
// https://docs.web3forms.com/getting-started/installation#step-2-create-html-form

const Contact = () => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("");
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name")?.toString().trim() || "";
        const email = formData.get("email")?.toString().trim() || "";
        const message = formData.get("message")?.toString().trim() || "";

        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setResult("Sending...");

        formData.append("access_key", ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Form submitted successfully!");
                form.reset();
            } else {
                setError("❌ Submission failed. Please try again later.");
                console.log("Error", data);
            }
        } catch (err) {
            setError("❌ Network error. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className='w-full my-6' id="contact">
            <form
                onSubmit={onSubmit}
                method="post"
                className='border-2 py-4 rounded-lg border-gray-600/60 flex flex-col space-y-3 px-6'
            >
                <div>
                    <h2 className='text-center text-gray-100 text-sm md:text-base lg:text-lg'>Contact Me</h2>
                </div>

                <div className='grid md:grid-cols-[100px_1fr] items-center gap-x-4 gap-y-2 md:gap-4'>
                    <label className='text-xs md:text-sm text-gray-300'>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className='bg-blue-500/25 rounded-lg px-4 py-1 text-white border border-transparent focus:border-gray-400/50 focus:outline-none text-xs md:text-sm'
                        placeholder='John Doe'
                    />

                    <label className='text-xs md:text-sm text-gray-300'>Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className='bg-blue-500/25 rounded-lg px-4 py-1 text-white border border-transparent focus:border-gray-400/50 focus:outline-none text-xs md:text-sm'
                        placeholder='johndoe@gmail.com'
                    />

                    <label className='text-xs md:text-sm text-gray-300'>Message</label>
                    <textarea
                        name="message"
                        required
                        className='bg-blue-500/25 rounded-lg px-4 py-1 text-white border border-transparent focus:border-gray-400/50 focus:outline-none text-xs md:text-sm'
                        placeholder='Your message here...'
                    />
                </div>

                <div className='flex w-full items-center justify-end'>
                    <button
                        type="submit"
                        className='px-4 py-1 bg-blue-500/25 text-gray-50/60 w-fit rounded-lg hover:text-gray-50/80 cursor-pointer text-sm md:text-base'
                    >
                        Submit
                    </button>
                </div>

                {(result || error) && (
                    <div className="text-center text-xs md:text-sm text-gray-300/70">
                        {result && <p className="text-green-400">{result}</p>}
                        {error && <p className="text-red-400">{error}</p>}
                    </div>
                )}

                <div>
                    <p className='text-center text-xs md:text-sm text-gray-300/60'>
                        or just simply send me a mail at{" "}
                        <a
                            href="mailto:contact@joybiswas.com"
                            className='text-gray-200'
                        >
                            contact@joybiswas.com
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Contact;