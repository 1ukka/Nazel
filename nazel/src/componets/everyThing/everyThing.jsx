import { Feedback } from "../feedbacks/feedback";
import { Footer } from "../footer/footer";
import { Frontimg } from "../frontimg/frontimg";
import { Header } from "../header/header";

export const EveryThing = () => {
    return (<>
    <Header />
    <Frontimg />
    <Feedback   />
    <Footer />
    </>
    );
}