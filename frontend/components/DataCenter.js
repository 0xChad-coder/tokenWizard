

// create useReducer hook here to manage state for the entire form so as to prevent clearing of state when a form component is unmounted.
//0x0000000000000000000000000000000000000000
const initialState = {
    sliderState1: false,
    sliderState2: false,
    sliderState3: false,
    sliderState4: false,
    buyTaxSlide: false,
    sellTaxSlide: false,
    tokenName: "",
    tokenSymbol: "",
    totalSupply: 0,
    teamAllocation: 0,
    telegramLink: "",
    twitterLink: "",
    description: "",
    websiteLink: "",
    limitPerWallet: 0,
    maxPerTx: 0,
    buyTax: 0,
    sellTax: 0,
    teamPayoutAddress: "0x0000000000000000000000000000000000000000",
    taxPayoutAddress: "0x0000000000000000000000000000000000000000"
  };
  
const reducer = (state, action) => {
    switch (action.type) {
        case "slider1":
            return { ...state, sliderState1: !state.sliderState1 }
        case "slider2":
            return { ...state, sliderState2: !state.sliderState2 }
        case "slider3":
            return { ...state, sliderState3: !state.sliderState3 }
        case "slider4":
            return { ...state, sliderState4: !state.sliderState4 }
        case "buyTaxSlide":
            return { ...state, buyTaxSlide: !state.buyTaxSlide }
        case "sellTaxSlide":
            return { ...state, sellTaxSlide: !state.sellTaxSlide }
        case "tokenName":
            return {...state, tokenName: action.payload}
        case "tokenSymbol":
            return {...state, tokenSymbol: action.payload}
        case "totalSupply":
            return {...state, totalSupply: action.payload}
        case "teamAllocation":
            return {...state, teamAllocation: action.payload}
        case "telegramLink":
            return {...state, telegramLink: action.payload}
        case "twitterLink":
            return {...state, twitterLink: action.payload}
        case "description":
            return {...state, description: action.payload}
        case "websiteLink":
            return {...state, websiteLink: action.payload}
        case "limitPerWallet":
            return {...state, limitPerWallet: action.payload}
        case "maxPerTx":
            return {...state, maxPerTx: action.payload}
        case "buyTax":
            return {...state, buyTax: action.payload}
        case "sellTax":
            return {...state, sellTax: action.payload}
        case "teamPayoutAddress":
            console.log(action.payload)
            return {...state, teamPayoutAddress: action.payload}
        case "taxPayoutAddress":
            return {...state, taxPayoutAddress: action.payload}
        default:
            return initialState;
    }
};

export {initialState, reducer}