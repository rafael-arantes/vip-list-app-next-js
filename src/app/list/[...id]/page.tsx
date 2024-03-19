'use client';
import { usePathname } from 'next/navigation';

export default function Page() {
  const listId = usePathname().split('/')[2];
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Access the form element
    const form = event.currentTarget;
    // Get the input elements
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    // Get the values of the input fields
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    // Log the values
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log('submit');
  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600">
      <form className="w-2/3 md:w-1/5" onSubmit={onSubmit}>
        <div className="flex flex-col gap-4 w-full">
          <p className="text-white text-center">List ID: {listId}</p>
          <input
            className="rounded-full p-2 focus:outline-none text-xs w-full transition-all focus:scale-105"
            type="name"
            name="name"
            placeholder="Seu nome"
          />
          <input
            className="rounded-full p-2 focus:outline-none text-xs w-full transition-all focus:scale-105"
            type="email"
            name="email"
            placeholder="Seu e-mail"
          />
          <button
            className="bg-zinc-100 rounded-full text-xs font-bold focus:outline-none focus:scale-105 p-2 hover:bg-zinc-300 transition-all"
            type="submit"
          >
            Participar
          </button>
        </div>
      </form>
    </div>
  );
}
