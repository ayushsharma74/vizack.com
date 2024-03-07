"use client"
import Servicecard from "@/components/Servicecard";
// import Link from "next/link";
import Upperbanner from "@/components/Upperbanner";
// import about from "../about/page";
export default function services(){
    return(
        <>
       
        <Upperbanner content={'SERVICES'} route={'services'} routeName={'Services'}/>
        <div className="mb-10">
            <Servicecard 
                    service={'Digital Discovery Dive'}
                    content={`
                    Embark on a digital voyage of discovery with our 
expert-guided sessions. Dive deep into the digital landscape, uncovering 
hidden opportunities and charting a course for your brand's success. 
Explore new horizons, harnessing the power of data-driven insights and 
innovative strategies to propel your business to greater heights.`}
                    imgURL="/assets/images/digital dive.jpeg"
                />
        </div>
        <div className="mb-10">
            <Servicecard 
                    service={'Website Design and Development'}
                    content={`
                Transform your online presence into a 
                digital masterpiece with our website design and development services. 
                From concept to creation, we craft visually stunning, user-friendly websites 
                that captivate audiences and drive results. Elevate your brand with a 
                website that not only looks great but also delivers an exceptional user 
                experience. 
                    `}
                    imgURL="/assets/images/web development.jpeg"
                />

            </div>
            <div className="mb-10">
                <Servicecard
                    service={'Public Relations'}
                    content={`
                    Ignite conversations, shape perceptions, and build lasting 
relationships with our strategic public relations solutions. From media 
relations to reputation management, we amplify your brand's voice, 
ensuring it resonates with the right audiences at the right time. Navigate 
the ever-changing media landscape with confidence, guided by our 
seasoned PR experts.
                    `}
                    imgURL="/assets/images/public relations.jpg"
                />
            </div>
            <div className="mb-10">
                <Servicecard
                    service={'Data Analytics Services'}
                    content={`
                    Unlock the power of data with our comprehensive 
analytics services. From data collection to actionable insights, we help you 
harness the full potential of your data assets. Dive deep into the numbers, 
uncovering hidden patterns and trends that drive informed decision-making and fuel business growth. Turn data into your competitive 
advantage with our advanced analytics solutions.
                    `}
                    imgURL="/assets/images/data analytics services.png"
                />
        </div>
        <div className="mb-10">
            <Servicecard 
                    service={'Strategic Sales Solutions'}
                    content={`
                    Revolutionize your sales approach with our 
strategic sales solutions. From lead generation to conversion optimization, 
we craft tailored strategies that drive results. Break through barriers, unlock 
new markets, and accelerate your sales pipeline with our innovative 
approaches and proven methodologies. Elevate your sales game and 
achieve sustainable growth with our strategic guidance.
                    `}
                    imgURL="/assets/images/strategic solution.png"
                />
        </div>
        <div className="mb-10">
                <Servicecard
                    service={'Innovative Brand Building'}
                    content={`
                    Build a brand that stands out in a crowded 
marketplace with our innovative brand building services. From brand 
strategy to creative execution, we craft compelling narratives and 
memorable experiences that resonate with your target audience. Transform 
your brand into a beacon of inspiration, driving loyalty, engagement, and 
long-term success. Unleash the full potential of your brand with our 
innovative approach to branding.
                    `}
                    imgURL="/assets/images/brand building.webp"
                />
        </div>
        <div className="mb-10">
                <Servicecard
                    service={'Strategic Politics Redefined'}
                    content={`
                    Empowering political leaders, candidates, 
and organizations with strategic guidance and innovative solutions is our 
mission. Our experienced team crafts compelling narratives and winning 
campaign strategies tailored to your specific goals. With a focus on 
integrity and transparency, we partner with those committed to positive 
change, shaping the future of politics together.
                    `}
                    imgURL="/assets/images/politics redefined.png"
                />
            </div>
        </>
    );
}gi