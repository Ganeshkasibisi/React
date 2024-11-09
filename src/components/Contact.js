const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-2xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-4 m-4" placeholder="Name"/> <br/>
                <input type="email" className="border border-black p-4 m-4" placeholder="Email"/><br/>
                <input type="text" className="border border-black p-4 m-4" placeholder="query"/><br/>

                <input type="submit" className="border border-black p-4 m-4 rounded-lg bg-black text-white"/>
            </form>
        </div>
    )
}
export default Contact;