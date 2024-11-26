
const toSignIn = (router: any) => {
    router.push('/signin')
}
const toLearn = (router: any) => {
    router.push('/Dashboard/learn')
}
const toRead = (router: any) => {
    router.push('/Dashboard/read')
}
const toWatch = (router: any) => {
    router.push('/Dashboard/watch');
}
const toMeet = (router: any) => {
    router.push('/Dashboard/meet')
}
const toNewsletter = (router: any) => {
    router.push('/Dashboard/newsletter')
}
const toAssessment = (router: any) => {
    router.push('/Dashboard/assessment')
}

const to12EmailCourse = (router:any) => {
    window.open('/static_page/12-day-email-course')
}



const wholePackage:any = [
    {
        type: 'read',
        title: 'Interactive Value Driven Workbooks',
        badge: 'Growth',
        isChecked: false,
        price: 'Free',
        content: 'Get Limited Edition Value Driven Interactive Workbooks',
        imgUrl: '',
        button1: 'Get Now', // before sign in
        button2: 'Access Here',  // after sign in
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'watch',
        title: 'Data & AI Value Video Coaching',
        badge: 'Growth',
        isChecked: false,
        price: 'Free',
        content: 'Claim 12 Day of Data & AI Value Video Coaching',
        imgUrl: '',
        button1: 'Claim Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toWatch(router)
    },
    {
        type: 'learn',
        title: 'AI Value Advisor Cheat Sheets',
        badge: 'Growth',
        isChecked: false,
        price: 'Free',
        content: 'Access Regular AI Value Advisor Cheat Sheets',
        imgUrl: '',
        button1: 'Access Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'learn',
        title: 'AI Value Advisor Email Course',
        badge: 'Growth',
        isChecked: false,
        price: 'Free',
        content: 'Get Your Individual 2 Week Email Course on Becoming an AI Value Advisor',
        imgUrl: '',
        button1: 'Get Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => to12EmailCourse(router)
    },
    {
        type: 'learn',
        title: 'Starter Self Assessment Scorecard',
        badge: 'Growth',
        isChecked: false,
        price: '$0',
        content: 'Access Your Personalised Starter Self Assessment Scorecard',
        imgUrl: '',
        button1: 'Access Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'read',
        title: 'Book Discount Bundle',
        badge: 'Growth',
        isChecked: false,
        price: 'Free',
        content: 'Redeem a package of multiple book discounts',
        imgUrl: '',
        button1: 'Redeem Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'read',
        title: 'Value Driven Newsletters',
        badge: 'Growth',
        isChecked: false,
        price: 'Free',
        content: 'Get ALL Value Driven Newsletters',
        imgUrl: '',
        button1: 'Get Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toNewsletter(router)
    },
    {
        type: 'read',
        title: 'Value Driven Executive Handbook',
        badge: 'Amplify',
        isChecked: false,
        price: '$35',
        content: 'Claim Exclusive Value Driven Executive Handbook which is not available at bookstores',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toLearn(router)
    },
    {
        type: 'learn',
        title: 'Advanced Self Assessment Scorecard',
        badge: 'Amplify',
        isChecked: false,
        price: '$0',
        content: 'Access Your Advanced Self Assessment Scorecard Session',
        imgUrl: '',
        button1: 'Access Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'meet',
        title: 'Bonus 1-2-1 Scorecard Feedback',
        badge: 'Amplify',
        isChecked: false,
        price: '$0',
        content: 'Redeem Your Bonus 1-2-1 Scorecard Feedback Session',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Book Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'meet',
        title: '3 Month 1-2-1 Coaching',
        badge: 'Amplify',
        isChecked: false,
        price: '$650',
        content: 'Get 3 Months of 1-2-1 Coaching with Options to Extend',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'read',
        title: 'Choice of All Published Books',
        badge: 'Peak',
        isChecked: false,
        price: '$85',
        content: 'Get Personal Choice of All Published Books in Your preferred format',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'meet',
        title: 'Personalised Self Assessment Scorecard',
        badge: 'Peak',
        isChecked: false,
        price: '$0',
        content: 'Access Your Personalised Self Assessment Scorecard Session',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Book Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'meet',
        title: 'Bonus 1-2-1 Scorecard Feedback',
        badge: 'Peak',
        isChecked: false,
        price: '$0',
        content: 'Redeem Your Bonus 1-2-1 Scorecard Feedback Session',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Book Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'meet',
        title: '12 Month 1-2-1 Coaching',
        badge: 'Peak',
        isChecked: false,
        price: '$550',
        content: 'Get 12 Months of 1-2-1 Coaching with Options to Extend',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'meet',
        title: 'The AI Value Advisory Network',
        badge: 'Peak',
        isChecked: false,
        price: '$0',
        content: 'Get Exclusive Access to The AI Value Advisory Network',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'read',
        title: 'Curated Value Driven eBooks Library',
        badge: 'Peak',
        isChecked: false,
        price: '$0',
        content: 'Access Full Range of Curated Library of Value Driven eBooks',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'meet',
        title: 'PERSONALISED AI Value Advisory COACHING',
        badge: 'Platinum Max',
        isChecked: false,
        price: '$650',
        content: 'Gain EXCLUSIVE access to the PERSONALISED AI Value Advisory COACHING Program',
        imgUrl: '',
        button1: 'Apply Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'learn',
        title: 'NEW ValueBot Data & AI Value Chatbot',
        badge: 'Platinum Max',
        isChecked: false,
        price: 'Free',
        content: 'Claim FREE access to the NEW ValueBot Data & AI Value Chatbot',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toLearn(router)
    },
    {
        type: 'watch',
        title: 'Data & AI Value Video Coaching',
        badge: 'Platinum Max',
        isChecked: false,
        price: 'Free',
        content: 'Claim 12 Day of Data & AI Value Video Coaching',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toWatch(router)
    },
    {
        type: 'read',
        title: 'Interactive Value Driven Workbooks',
        badge: 'Platinum Max',
        isChecked: false,
        price: 'Free',
        content: 'Get Limited Edition Value Driven Interactive Workbooks',
        imgUrl: '',
        button1: 'Get now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'read',
        title: 'Value Driven Executive Handbook',
        badge: 'Platinum Max',
        isChecked: false,
        price: '$35',
        content: 'Claim Exclusive Value Driven Executive Handbook which is not available at bookstores',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'meet',
        title: 'PERSONALISED AI Value Advisory COACHING',
        badge: 'Gold Max',
        isChecked: false,
        price: '$650',
        content: 'Gain EXCLUSIVE access to the PERSONALISED AI Value Advisory COACHING Program',
        imgUrl: '',
        butto1: 'Apply Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'learn',
        title: 'Data & AI Value Driven Business Readiness Assessment',
        badge: 'Gold Max',
        isChecked: false,
        price: '$0',
        content: 'Get FREE and UNLIMITED access to the Data & AI Value Driven Business Readiness Assessment',
        imgUrl: '',
        button1: 'Access Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'read',
        title: 'Value Driven Executive Handbook',
        badge: 'Gold Max',
        isChecked: false,
        price: '$35',
        content: 'Claim Exclusive Value Driven Executive Handbook which is not available at bookstores',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toWatch(router)
    },
    {
        type: 'learn',
        title: 'NEW ValueBot AI data value Chatbot',
        badge: 'Gold Max',
        isChecked: false,
        price: 'Free',
        content: 'Claim FREE access to the NEW ValueBot AI data value Chatbot',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toLearn(router)
    },
    {
        type: 'watch',
        title: 'Data & AI Value Video Coaching',
        badge: 'Gold Max',
        isChecked: false,
        price: 'Free',
        content: 'Claim 12 Day of Data & AI Value Video Coaching',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toWatch(router)
    },
    {
        type: 'read',
        title: 'Interactive Value Driven Workbooks',
        badge: 'Gold Max',
        isChecked: false,
        price: 'Free',
        content: 'Get Limited Edition Value Driven Interactive Workbooks',
        imgUrl: '',
        button1: 'Get Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'read',
        title: 'Book Discount Bundle',
        badge: 'Gold Max',
        isChecked: false,
        price: 'Free',
        content: 'Redeem a package of multiple book discounts',
        imgUrl: '',
        button1: 'Redeem Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'learn',
        title: 'NEW ValueBot Data & AI Value Chatbot',
        badge: 'Bronze Max',
        isChecked: false,
        price: 'Free',
        content: 'Claim FREE access to the NEW ValueBot Data & AI Value Chatbot',
        imgUrl: '',
        button1: 'Claim Now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toLearn(router)
    },
    {
        type: 'learn',
        title: 'Data & AI Value Driven Business Readiness Assessment',
        badge: 'Bronze Max',
        isChecked: false,
        price: '$0',
        content: 'Get FREE and UNLIMITED access to the Data & AI Value Driven Business Readiness Assessment',
        imgUrl: '',
        button1: 'Access now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toAssessment(router)
    },
    {
        type: 'read',
        title: 'Interactive Value Driven Workbooks',
        badge: 'Bronze Max',
        isChecked: false,
        price: 'Free',
        content: 'Get Limited Edition Value Driven Interactive Workbooks',
        imgUrl: '',
        button1: 'Get now',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toRead(router)
    },
    {
        type: 'watch',
        title: 'Data & AI Value Video Coaching',
        badge: 'Bronze Max',
        isChecked: false,
        price: 'Free',
        content: 'Claim 12 Day of Data & AI Value Video Coaching',
        imgUrl: '',
        button1: 'Claim Here',
        button2: 'Access Here',
        action1: (router:any) => toSignIn(router),
        action2: (router:any) => toWatch(router)
    }
];

export default wholePackage;