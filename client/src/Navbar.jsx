
const Navbar = () => {
    return(
        <div className="flex flex-row bg-slate-900 text-3xl text-white justify-between p-3">
            <div className="w-1/2">
                SpaCey
            </div>
            <div className="flex flex-row space-x-12 text-2xl">
                <a href="/bounties"> 
                    Bounties
                </a>
                <a href="/wallet"> 
                    Wallet
                </a>
                <a href="/account"> 
                    Account
                </a>
            </div>

        </div>
    )
}
export default Navbar