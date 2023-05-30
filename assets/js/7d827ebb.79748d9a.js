"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6957:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={id:"EVM_Smart_Contract",title:"EVM Smart Contract",sidebar_label:"EVM Smart Contract"},i=void 0,s={unversionedId:"EVM_Smart_Contract",id:"EVM_Smart_Contract",isDocsHomePage:!1,title:"EVM Smart Contract",description:"This guide introduces the development process of smart contracts and issues should be noticed during development process from the perspective of the developer. It guides developers to quickly develop high-quality smart contracts on the PlatON network. Mainly from the following aspects to explain\uff1a",source:"@site/../docs/EVM\u667a\u80fd\u5408\u7ea6\u5f00\u53d1.md",sourceDirName:".",slug:"/EVM_Smart_Contract",permalink:"/docs/EVM_Smart_Contract",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/EVM\u667a\u80fd\u5408\u7ea6\u5f00\u53d1.md",version:"current",frontMatter:{id:"EVM_Smart_Contract",title:"EVM Smart Contract",sidebar_label:"EVM Smart Contract"}},l=[{value:"Contract Security Development Guide",id:"contract-security-development-guide",children:[{value:"Compiler Bug",id:"compiler-bug",children:[]},{value:"Standard Contract Development Process",id:"standard-contract-development-process",children:[]},{value:"Common Pitfalls",id:"common-pitfalls",children:[]},{value:"Security Recommendations",id:"security-recommendations",children:[]},{value:"Security Tools",id:"security-tools",children:[]},{value:"Third Party Audit",id:"third-party-audit",children:[]}]}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide introduces the development process of smart contracts and issues should be noticed during development process from the perspective of the developer. It guides developers to quickly develop high-quality smart contracts on the PlatON network. Mainly from the following aspects to explain\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#development-manual"},"Development Manual")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#migrate-contract"},"Migrate Contract")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#crowdfunding-contract"},"Crowdfunding Contract")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#development-costs"},"Development Costs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#best-practice"},"Best Practice")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#contract-security-development-guide"},"Contract Security Development Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#faq"},"FAQ"))),(0,o.kt)("h2",{id:"contract-security-development-guide"},"Contract Security Development Guide"),(0,o.kt)("p",null,"In Solidity, you can use smart contracts to handle tokens or, possibly, even more valuable things. Furthermore, every execution of a smart contract happens in public and, in addition to that, the source code is often available. In the blockchain world, contracts have always been the main point of attack for hackers, and they have also caused very large losses. Therefore, the security development of the contract is very important. You can consider the following aspects to improve the security of the contract."),(0,o.kt)("h3",{id:"compiler-bug"},"Compiler Bug"),(0,o.kt)("p",null,"First, you must understand the bugs of the Solidity compiler itself, and try to avoid the version of the compiler in question or the use of the problem. Solidity compiler bug list: ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/bugs.html"},"https://solidity.readthedocs.io/en/latest/bugs.html"),"."),(0,o.kt)("h3",{id:"standard-contract-development-process"},"Standard Contract Development Process"),(0,o.kt)("p",null,"If you want to solve the security problem of smart contracts, you must develop contracts according to standard processes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The detailed design must be completed first, taking into account various scenarios and abnormal situations. Avoid unclear and incompletely introduced bugs."),(0,o.kt)("li",{parentName:"ol"},"During development, to be modular and concise, complexity will increase the risk of errors."),(0,o.kt)("li",{parentName:"ol"},"Before the contract is deployed to the mainnet, the contract must be adequately reviewed and tested."),(0,o.kt)("li",{parentName:"ol"},"Keep an eye on the operation status of the contract. In an emergency, you can destroy the contract or provide a similar emergency freeze function.")),(0,o.kt)("h3",{id:"common-pitfalls"},"Common Pitfalls"),(0,o.kt)("h4",{id:"private-information-and-randomness"},"Private Information and Randomness"),(0,o.kt)("p",null,"Everything you use in a smart contract is publicly visible, even local variables and state variables marked ",(0,o.kt)("inlineCode",{parentName:"p"},"private"),"."),(0,o.kt)("p",null,"Using random numbers in smart contracts is quite tricky if you do not want miners to be able to cheat(The use of random numbers in smart contracts is difficult to ensure that nodes do not cheat. This is because random numbers in smart contracts generally rely on the local time of the computing node, and local time can be forged by malicious nodes. Therefore, this method is not safe. A common practice is to use off-chain third-party services such as Oraclize to obtain random numbers)."),(0,o.kt)("h4",{id:"re-entrancy"},"Re-Entrancy"),(0,o.kt)("p",null,"Any interaction from a contract (A) with another contract (B) and any transfer of Ether hands over control to that contract (B). This makes it possible for B to call back into A before this interaction is completed. To give an example, the following code contains a bug (it is just a snippet and not a complete contract):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity >=0.4.0 <0.7.0;\n\n// THIS CONTRACT CONTAINS A BUG - DO NOT USE\ncontract Fund {\n    /// Mapping of ether shares of the contract.\n    mapping(address => uint) shares;\n    /// Withdraw your share.\n    function withdraw() public {\n        if (msg.sender.send(shares[msg.sender]))\n            shares[msg.sender] = 0;\n    }\n}\n")),(0,o.kt)("p",null,"The problem is not too serious here because of the limited gas as part of ",(0,o.kt)("inlineCode",{parentName:"p"},"send"),", but it still exposes a weakness: Ether transfer can always include code execution, so the recipient could be a contract that calls back into ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw"),". This would let it get multiple refunds and basically retrieve all the Ether in the contract. In particular, the following contract will allow an attacker to refund multiple times as it uses ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," which forwards all remaining gas by default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pragma solidity >=0.4.0 <0.7.0;\n\n// THIS CONTRACT CONTAINS A BUG - DO NOT USE\ncontract Fund {\n    /// Mapping of ether shares of the contract.\n    mapping(address => uint) shares;\n    /// Withdraw your share.\n    function withdraw() public {\n        (bool success,) = msg.sender.call.value(shares[msg.sender])("");\n        if (success)\n            shares[msg.sender] = 0;\n    }\n}\n')),(0,o.kt)("p",null,"To avoid re-entrancy, you can use the Checks-Effects-Interactions pattern as outlined further below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity >=0.4.11 <0.7.0;\n\ncontract Fund {\n    /// Mapping of ether shares of the contract.\n    mapping(address => uint) shares;\n    /// Withdraw your share.\n    function withdraw() public {\n        uint share = shares[msg.sender];\n        shares[msg.sender] = 0;\n        msg.sender.transfer(share);\n    }\n}\n")),(0,o.kt)("p",null,"Note that re-entrancy is not only an effect of Ether transfer but of any function call on another contract. Furthermore, you also have to take multi-contract situations into account. A called contract could modify the state of another contract you depend on."),(0,o.kt)("h4",{id:"gas-limit-and-loops"},"Gas Limit and Loops"),(0,o.kt)("p",null,"Loops that do not have a fixed number of iterations, for example, loops that depend on storage values, have to be used carefully: Due to the block gas limit, transactions can only consume a certain amount of gas. Either explicitly or just due to normal operation, the number of iterations in a loop can grow beyond the block gas limit which can cause the complete contract to be stalled at a certain point. This may not apply to ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," functions that are only executed to read data from the blockchain. Still, such functions may be called by other contracts as part of on-chain operations and stall those. Please be explicit about such cases in the documentation of your contracts."),(0,o.kt)("h4",{id:"sending-and-receiving-ether"},"Sending and Receiving Ether"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Neither contracts nor \u201cexternal accounts\u201d are currently able to prevent that someone sends them Ether. Contracts can react on and reject a regular transfer, but there are ways to move Ether without creating a message call. One way is to simply \u201cmine to\u201d the contract address and the second way is using ",(0,o.kt)("inlineCode",{parentName:"li"},"selfdestruct(x)"),"."),(0,o.kt)("li",{parentName:"ul"},"If a contract receives Ether (without a function being called), either the receive Ether or the fallback function is executed. If it does not have a receive nor a fallback function, the Ether will be rejected (by throwing an exception). During the execution of one of these functions, the contract can only rely on the \u201cgas stipend\u201d it is passed (2300 gas) being available to it at that time. This stipend is not enough to modify storage (do not take this for granted though, the stipend might change with future hard forks). To be sure that your contract can receive Ether in that way, check the gas requirements of the receive and fallback functions."),(0,o.kt)("li",{parentName:"ul"},"There is a way to forward more gas to the receiving contract using ",(0,o.kt)("inlineCode",{parentName:"li"},'addr.call{value: x}("")'),". This is essentially the same as ",(0,o.kt)("inlineCode",{parentName:"li"},"addr.transfer(x)"),", only that it forwards all remaining gas and opens up the ability for the recipient to perform more expensive actions (and it returns a failure code instead of automatically propagating the error). This might include calling back into the sending contract or other state changes you might not have thought of. So it allows for great flexibility for honest users but also for malicious actors."),(0,o.kt)("li",{parentName:"ul"},"Use the most precise units to represent the wei amount as possible, as you lose any that is rounded due to a lack of precision."),(0,o.kt)("li",{parentName:"ul"},"If you want to send Ether using ",(0,o.kt)("inlineCode",{parentName:"li"},"address.transfer"),", there are certain details to be aware of:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If the recipient is a contract, it causes its receive or fallback function to be executed which can, in turn, call back the sending contract."),(0,o.kt)("li",{parentName:"ol"},"Sending Ether can fail due to the call depth going above 1024. Since the caller is in total control of the call depth, they can force the transfer to fail; take this possibility into account or use ",(0,o.kt)("inlineCode",{parentName:"li"},"send")," and make sure to always check its return value. Better yet, write your contract using a pattern where the recipient can withdraw Ether instead."),(0,o.kt)("li",{parentName:"ol"},"Sending Ether can also fail because the execution of the recipient contract requires more than the allotted amount of gas (explicitly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"require"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"assert"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"revert")," or because the operation is too expensive) - it \u201cruns out of gas\u201d (OOG). If you use ",(0,o.kt)("inlineCode",{parentName:"li"},"transfer")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"send")," with a return value check, this might provide a means for the recipient to block progress in the sending contract. Again, the best practice here is to use a ",(0,o.kt)("a",{parentName:"li",href:"https://solidity.readthedocs.io/en/latest/common-patterns.html#withdrawal-pattern"},"\u201cwithdraw\u201d pattern instead of a \u201csend\u201d pattern"),"\u3002")))),(0,o.kt)("h4",{id:"callstack-depth"},"Callstack Depth"),(0,o.kt)("p",null,"External function calls can fail any time because they exceed the maximum call stack of 1024. In such situations, Solidity throws an exception. Malicious actors might be able to force the call stack to a high value before they interact with your contract."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},".send()")," does ",(0,o.kt)("strong",{parentName:"p"},"not")," throw an exception if the call stack is depleted but rather returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in that case. The low-level functions ",(0,o.kt)("inlineCode",{parentName:"p"},".call()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},".delegatecall()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".staticcall()")," behave in the same way."),(0,o.kt)("h4",{id:"txorigin"},"tx.origin"),(0,o.kt)("p",null,"Never use tx.origin for authorization. Let\u2019s say you have a wallet contract like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity >=0.5.0 <0.7.0;\n\n// THIS CONTRACT CONTAINS A BUG - DO NOT USE\ncontract TxUserWallet {\n    address owner;\n\n    constructor() public {\n        owner = msg.sender;\n    }\n\n    function transferTo(address payable dest, uint amount) public {\n        require(tx.origin == owner);\n        dest.transfer(amount);\n    }\n}\n")),(0,o.kt)("p",null,"Now someone tricks you into sending Ether to the address of this attack wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity >=0.5.0 <0.7.0;\n\ninterface TxUserWallet {\n    function transferTo(address payable dest, uint amount) external;\n}\n\ncontract TxAttackWallet {\n    address payable owner;\n\n    constructor() public {\n        owner = msg.sender;\n    }\n\n    function() external {\n        TxUserWallet(msg.sender).transferTo(owner, msg.sender.balance);\n    }\n}\n")),(0,o.kt)("p",null,"If your wallet had checked ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender")," for authorization, it would get the address of the attack wallet, instead of the owner address. But by checking ",(0,o.kt)("inlineCode",{parentName:"p"},"tx.origin"),", it gets the original address that kicked off the transaction, which is still the owner address. The attack wallet instantly drains all your funds."),(0,o.kt)("h4",{id:"twos-complement--underflows--overflows"},"Two\u2019s Complement / Underflows / Overflows"),(0,o.kt)("p",null,"As in many programming languages, Solidity\u2019s integer types are not actually integers. They resemble integers when the values are small, but behave differently if the numbers are larger. For example, the following is true: ",(0,o.kt)("inlineCode",{parentName:"p"},"uint8(255) + uint8(1) == 0"),". This situation is called an ",(0,o.kt)("em",{parentName:"p"},"overflow"),". It occurs when an operation is performed that requires a fixed size variable to store a number (or piece of data) that is outside the range of the variable\u2019s data type. An ",(0,o.kt)("em",{parentName:"p"},"underflow")," is the converse situation: ",(0,o.kt)("inlineCode",{parentName:"p"},"uint8(0) - uint8(1) == 255"),"."),(0,o.kt)("p",null,"In general, read about the limits of two\u2019s complement representation, which even has some more special edge cases for signed numbers."),(0,o.kt)("p",null,"Try to use ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," to limit the size of inputs to a reasonable range and use the ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/layout-of-source-files.html#smt-checker"},"SMT checker")," to find potential overflows, or use a library like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/math/SafeMath.sol"},"SafeMath")," if you want all overflows to cause a revert."),(0,o.kt)("p",null,"Code such as ",(0,o.kt)("inlineCode",{parentName:"p"},"require((balanceOf[_to] + _value) >= balanceOf[_to])")," can also help you check if values are what you expect."),(0,o.kt)("h4",{id:"clearing-mappings"},"Clearing Mappings"),(0,o.kt)("p",null,"The Solidity type ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," (see ",(0,o.kt)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/latest/types.html#mapping-types"},"Mapping Types"),") is a storage-only key-value data structure that does not keep track of the keys that were assigned a non-zero value. Because of that, cleaning a mapping without extra information about the written keys is not possible. If a ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," is used as the base type of a dynamic storage array, deleting or popping the array will have no effect over the ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," elements. The same happens, for example, if a ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," is used as the type of a member field of a ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," that is the base type of a dynamic storage array. The ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," is also ignored in assignments of structs or arrays that containing a ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pragma solidity >=0.5.0 <0.7.0;\n\ncontract Map {\n    mapping (uint => uint)[] array;\n\n    function allocate(uint _newMaps) public {\n        for (uint i = 0; i < _newMaps; i++)\n            array.push();\n    }\n\n    function writeMap(uint _map, uint _key, uint _value) public {\n        array[_map][_key] = _value;\n    }\n\n    function readMap(uint _map, uint _key) public view returns (uint) {\n        return array[_map][_key];\n    }\n\n    function eraseMaps() public {\n        delete array;\n    }\n}\n")),(0,o.kt)("p",null,"Consider the example above and the following sequence of calls: ",(0,o.kt)("inlineCode",{parentName:"p"},"allocate(10)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"writeMap(4, 128, 256)"),". At this point, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"readMap(4, 128)")," returns 256. If we call ",(0,o.kt)("inlineCode",{parentName:"p"},"eraseMaps"),", the length of state variable ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," is zeroed, but since its ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," elements cannot be zeroed, their information stays alive in the contract\u2019s storage. After deleting ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),", calling ",(0,o.kt)("inlineCode",{parentName:"p"},"allocate(5)")," allows us to access ",(0,o.kt)("inlineCode",{parentName:"p"},"array[4]")," again, and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"readMap(4, 128)")," returns 256 even without another call to ",(0,o.kt)("inlineCode",{parentName:"p"},"writeMap"),"."),(0,o.kt)("p",null,"If your ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping")," information must be deleted, consider using a library similar to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/dapp-bin/blob/master/library/iterable_mapping.sol"},"iterable mapping"),", which allows you to traverse the keys and delete their values in the appropriate ",(0,o.kt)("inlineCode",{parentName:"p"},"mapping"),"."),(0,o.kt)("h4",{id:"permission-control-error"},"Permission Control Error"),(0,o.kt)("p",null,"In smart contracts, contract developers usually set some permission for the contract owner, but if the developer negligently writes wrong function permissions, it may lead to serious consequences such as transfer of the owner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function initContract() public {\n    owner = msg.reader;\n}\n")),(0,o.kt)("p",null,"The above code function needs to be set onlyOwner."),(0,o.kt)("p",null,"Reasonable permissions should be set for different functions in the contract."),(0,o.kt)("h4",{id:"address-initialization-problem"},"Address Initialization Problem"),(0,o.kt)("p",null,"In EVM, all address-related initializations are given an initial value of 0."),(0,o.kt)("p",null,"If an address variable is equal to 0, the variable may not be initialized or an unknown error may occur."),(0,o.kt)("p",null,"If the developer initializes an address variable in the code but does not assign an initial value, or the user does not assign the address variable by mistake when initiating an operation, but this variable needs to be handled in the following code, it is possible Cause unnecessary security risks."),(0,o.kt)("p",null,"For functions that involve addresses, it is recommended to add require (_to! = Address (0)) verification to effectively avoid unnecessary losses caused by user misoperations or unknown errors."),(0,o.kt)("h4",{id:"transaction-order-dependent"},"Transaction Order Dependent"),(0,o.kt)("p",null,"Since transactions are first stored in mempool in a short period of time, it is possible to know what action will take place before miners package them into blocks. This is troublesome for a decentralized market, because the transaction information of the token can be viewed, and the transaction order can be changed before it is packaged into a block. Avoiding this is difficult because it comes down to the specific contract itself."),(0,o.kt)("p",null,"For example, in the market, it is best to implement batch auctions (this also prevents high frequency trading issues). Another method is using a pre-commit scheme."),(0,o.kt)("h4",{id:"minor-details"},"Minor Details"),(0,o.kt)("p",null,"Types that do not occupy the full 32 bytes might contain \u201cdirty higher order bits\u201d. This is especially important if you access ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.data")," - it poses a malleability risk: You can craft transactions that call a function ",(0,o.kt)("inlineCode",{parentName:"p"},"f(uint8 x)")," with a raw byte argument of ",(0,o.kt)("inlineCode",{parentName:"p"},"0xff000001")," and with ",(0,o.kt)("inlineCode",{parentName:"p"},"0x00000001"),". Both are fed to the contract and both will look like the number ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," as far as ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," is concerned, but ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.data")," will be different, so if you use ",(0,o.kt)("inlineCode",{parentName:"p"},"keccak256(msg.data)")," for anything, you will get different results."),(0,o.kt)("h3",{id:"security-recommendations"},"Security Recommendations"),(0,o.kt)("h4",{id:"take-warnings-seriously"},"Take Warnings Seriously"),(0,o.kt)("p",null,"If the compiler warns you about something, you should better change it. Even if you do not think that this particular warning has security implications, there might be another issue buried beneath it. Any compiler warning we issue can be silenced by slight changes to the code."),(0,o.kt)("p",null,"Always use the latest version of the compiler to be notified about all recently introduced warnings."),(0,o.kt)("h4",{id:"restrict-the-amount-of-ether"},"Restrict the Amount of Ether"),(0,o.kt)("p",null,"Restrict the amount of Ether (or other tokens) that can be stored in a smart contract. If your source code, the compiler or the platform has a bug, these funds may be lost. If you want to limit your loss, limit the amount of Ether."),(0,o.kt)("h4",{id:"simple-and-modular"},"Simple and Modular"),(0,o.kt)("p",null,"Keep your contracts small and easily understandable. Single out unrelated functionality in other contracts or into libraries. General recommendations about source code quality of course apply: Limit the amount of local variables, the length of functions and so on. Document your functions so that others can see what your intention was and whether it is different than what the code does."),(0,o.kt)("h4",{id:"use-the-checks-effects-interactions-pattern"},"Use the Checks-Effects-Interactions Pattern"),(0,o.kt)("p",null,"Most functions will first perform some checks (who called the function, are the arguments in range, did they send enough Ether, does the person have tokens, etc.). These checks should be done first."),(0,o.kt)("p",null,"As the second step, if all checks passed, effects to the state variables of the current contract should be made. Interaction with other contracts should be the very last step in any function."),(0,o.kt)("p",null,"Early contracts delayed some effects and waited for external function calls to return in a non-error state. This is often a serious mistake because of the re-entrancy problem explained above."),(0,o.kt)("p",null,"Note that, also, calls to known contracts might in turn cause calls to unknown contracts, so it is probably better to just always apply this pattern."),(0,o.kt)("h4",{id:"include-a-fail-safe-mode"},"Include a Fail-Safe Mode"),(0,o.kt)("p",null,"While making your system fully decentralised will remove any intermediary, it might be a good idea, especially for new code, to include some kind of fail-safe mechanism:"),(0,o.kt)("p",null,"You can add a function in your smart contract that performs some self-checks like \u201cHas any Ether leaked?\u201d, \u201cIs the sum of the tokens equal to the balance of the contract?\u201d or similar things. Keep in mind that you cannot use too much gas for that, so help through off-chain computations might be needed there."),(0,o.kt)("p",null,"If the self-check fails, the contract automatically switches into some kind of \u201cfailsafe\u201d mode, which, for example, disables most of the features, hands over control to a fixed and trusted third party or just converts the contract into a simple \u201cgive me back my money\u201d contract."),(0,o.kt)("h4",{id:"check-function-permissions-carefully"},"Check Function Permissions Carefully"),(0,o.kt)("p",null,"Reasonable permissions should be set for different functions in the contract."),(0,o.kt)("p",null,"Check whether the functions in the contract use public and private keywords for visibility modification. Check whether the contract is correctly defined and uses modifiers to restrict access to key functions to avoid problems caused by unauthorized use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function initContract() public OnlyOwner {\n    owner = msg.reader;\n}\n")),(0,o.kt)("h4",{id:"ask-for-peer-review"},"Ask for Peer Review"),(0,o.kt)("p",null,"The more people examine a piece of code, the more issues are found. Asking people to review your code also helps as a cross-check to find out whether your code is easy to understand - a very important criterion for good smart contracts."),(0,o.kt)("h4",{id:"other"},"Other"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/guylando/KnowledgeLists/blob/master/EthereumSmartContracts.md"},"More Security Recommendations ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://consensys.github.io/smart-contract-best-practices/"},"Contract Best Practices"))),(0,o.kt)("h3",{id:"security-tools"},"Security Tools"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ethereum formal verification tool ",(0,o.kt)("a",{parentName:"li",href:"https://solidity.readthedocs.io/en/latest/layout-of-source-files.html#smt-checker"},"SMT checker")," ."),(0,o.kt)("li",{parentName:"ol"},"Formal verification tools: ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Beosin.beosin-vaas-eth"},"offline VS Code plugin"),"\uff0cand ",(0,o.kt)("a",{parentName:"li",href:"https://beosin.com/vaas/index.html#/audit/ptsj"},"Online version")," ."),(0,o.kt)("li",{parentName:"ol"},"Remix integrated security scan plugin: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mythx.io/en/latest/"},"MythX"),"\u3002")),(0,o.kt)("h3",{id:"third-party-audit"},"Third Party Audit"),(0,o.kt)("p",null,"You can find a professional third-party audit company for security audits, such as\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.slowmist.com/en/service-smart-contract-security-audit.html"},"slow mist"),"\u3002"),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);