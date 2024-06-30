

const Review = ({state}) => {

    return (
        <div className="text-white px-10 md:px-[100px]  mt-[30px]">
            <h1 className="font-bold text-[30px] text-center">Review</h1>
            <div className="flex justify-center item-center">
                <p className="w-[600px] text-center text-sm text-gray-400">
                    Almost there! Review your token setup.
                </p>
            </div>

            <div className="flex justify-center mt-5">
                <div className="w-full rounded-lg min-[600px]:w-[500px]">
                    <div className="border-2 border-white/40 rounded-lg px-5 py-4 mb-3">
                        {/* coin info */}
                        <p className="text-lg font-bold mb-3">Coin setup</p>
                        <div className="">
                            <div className="text-sm">
                                <p><span className="font-bold text-white/50">Token Name</span> - {state.tokenName} </p>
                                <p><span className="font-bold text-white/50">Ticker</span> - {state.tokenSymbol} </p>
                                <p><span className="font-bold text-white/50">Total supply</span> - {state.totalSupply} {state.tokenSymbol}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-white/40 rounded-lg px-6 py-4 mb-3">
                        {/* Socials */}
                        <p className="text-lg font-bold mb-3">Socials</p>
                        <div className="">
                            <div className="text-sm">
                                <p><span className="font-bold text-white/50">Telegram</span> - {state.telegramLink} </p>
                                <p><span className="font-bold text-white/50">Twitter</span> - {state.twitterLink} </p>
                                <p><span className="font-bold text-white/50">Website</span> - {state.websiteLink} </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-white/40 rounded-lg px-6 py-4 mb-3">
                        {/* distribution */}
                        <p className="text-lg font-bold mb-3">Distribution</p>
                        <div className="">
                            <div className="text-sm">
                                <p><span className="font-bold text-white/50">Team Allocation</span> - {state.teamAllocation}% </p>
                                <p><span className="font-bold text-white/50">Buy Tax</span> - {state.buyTax}% </p>
                                <p><span className="font-bold text-white/50">Sell Tax</span> - {state.sellTax}% </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-2 border-white/40 rounded-lg px-6 py-4">
                        {/* AnitBot */}
                        <p className="text-lg font-bold mb-3">Bot Protection</p>
                        <div className="">
                            <div className="text-sm">
                                <p><span className="font-bold text-white/50">Limit per wallet</span> - {state.limitPerWallet}% </p>
                                <p><span className="font-bold text-white/50">Max per transaction </span> - {state.maxPerTx}% </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Review