"use client"
import Upperbanner from "@/components/Upperbanner";
import Content from "@/components/Servicecard";
export default function services() {
    return (
        <>
            <Upperbanner content={'SERVICES'} route={'services'} routeName={'Services'} />
            <div>
                <Content image_src={"/assets/testing/5484597.jpg"} service={"Website Design & Development"} content={`Transform your online presence into a
                    digital masterpiece with our website design and development services.
                    From concept to creation, we craft visually stunning, user-friendly websites
                    that captivate audiences and drive results. Elevate your brand with a
                    website that not only looks great but also delivers an exceptional user
                    experience.`} />
                <Content image_src={"/assets/testing/7038058.jpg"} service={"Public Relations"} content={`Ignite conversations, shape perceptions, and build lasting
                    relationships with our strategic public relations solutions. From media
                    relations to reputation management, we amplify your brand's voice,
                    ensuring it resonates with the right audiences at the right time. Navigate
                    the ever-changing media landscape with confidence, guided by our
                    seasoned PR experts.`} />
                <Content image_src={"/assets/testing/2598560c.jpg"} service={"Data Analytics"} content={` Unlock the power of data with our comprehensive
                    analytics services. From data collection to actionable insights, we help you
                    harness the full potential of your data assets. Dive deep into the numbers,
                    uncovering hidden patterns and trends that drive informed decision-
                    making and fuel business growth. Turn data into your competitive
                    advantage with our advanced analytics solutions.`} />
                <Content image_src={"/assets/testing/7039196.jpg"} service={"Strategic Sales"} content={`Revolutionize your sales approach with our
                    strategic sales solutions. From lead generation to conversion optimization,
                    we craft tailored strategies that drive results. Break through barriers, unlock
                    new markets, and accelerate your sales pipeline with our innovative
                    approaches and proven methodologies. Elevate your sales game and
                    achieve sustainable growth with our strategic guidance.`} />
                <Content image_src={"/assets/testing/7634517.jpg"} service={"Innovative Brand Building"} content={`Build a brand that stands out in a crowded
                    marketplace with our innovative brand building services. From brand
                    strategy to creative execution, we craft compelling narratives and
                    memorable experiences that resonate with your target audience. Transform
                    your brand into a beacon of inspiration, driving loyalty, engagement, and
                    long-term success. Unleash the full potential of your brand with our
                    innovative approach to branding.`} />
                <Content image_src={"/assets/testing/5458281.jpg"} service={"Strategic Politics"} content={`Empowering political leaders, candidates,
                    and organizations with strategic guidance and innovative solutions is our
                    mission. Our experienced team crafts compelling narratives and winning
                    campaign strategies tailored to your specific goals. With a focus on
                    integrity and transparency, we partner with those committed to positive
                    change, shaping the future of politics togethe`} />
            </div>
        </>
    );
}
