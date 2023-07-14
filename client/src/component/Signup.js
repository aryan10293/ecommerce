import React from 'react'
function Signup() {
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [newUser, setNewUser] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const linkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer'
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        setNewUser({
            userName: name,
            email: e.target.value,
            password: password,
            confirmPassword: password
        })
    }
    const handleChangeName = (e) => {
        setName(e.target.value)
        setNewUser({
            userName: e.target.value,
            email: email,
            password: password,
            confirmPassword: password
        })
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        setNewUser({
            userName: name,
            email: email,
            password: e.target.value,
            confirmPassword: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const reg = await fetch('https://the-random-shop.onrender.com/createaccount',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser),
        })
        const data = await reg.json()
        alert('Account created, please login')
        window.location.href = "/login"
        console.log(data)
        setPassword('')
        setEmail('')
        setName('')
        } catch(err) {
            alert('Account was not created, please try again later')
            console.error(err)
        }

    }
  return (
    <div>
        <section className="h-screen">
            <div className="h-full">
                <div
                className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div
                    className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img
                    src="https://cashy.dk/storage/200/zk5okjsbxd3uwphxcywfafudcza7m5.png"
                    className="w-full"
                    alt="logo" />
                </div>

                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                    <form
                    onSubmit={handleSubmit}
                    >


                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="name"
                            placeholder="Enter Name" 
                            onChange={handleChangeName}
                            value={name}
                            />
                            <label
                            htmlFor="name"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Name
                            </label>
                        </div>

                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="email"
                            placeholder="Email address" 
                            onChange={handleChangeEmail}
                            value={email}
                            />
                            <label
                            htmlFor="email"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email address
                            </label>
                        </div>


                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="password"
                            placeholder="Password" 
                            onChange={handleChangePassword}
                            value={password}
                            />
                            <label
                            htmlFor="password"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Password
                            </label>
                        </div>



                        <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Sign Up
                                </button>

                            <a
                                href="/"
                                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                Already have an account? <span style={linkStyle}>login!</span>
                                </p>
                            </a>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Signup
