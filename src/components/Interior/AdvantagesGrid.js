import styles from "./Interior.module.css";

function AdvantagesGrid()
{
    return(
        <>
            <div className="flex flex-col justify-center mt-8">
                <div className="">
                    <div className={`${styles.grid_text} my-2`}>
                        <span className="font-bold block">Pricing</span>
                        <span clas="">Upfront full cost transparency</span>
                    </div>
                </div>
                <div className="mt-4">
                    <div className={styles.grid_text}>
                        <span className="block font-bold">Designs</span>
                        <ul className="list-disc mx-4">
                                    <li>Fully Personalized designs</li>
                                    <li>3D visuals</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <div className={styles.grid_text}>
                        <span className="block font-bold">Designers</span>
                            <ul className="list-disc mx-4">
                                    <li>Experienced designers</li>
                                    <li>Vast Knowledge of form and functionality</li>
                                </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <div className={styles.grid_text}>
                        <span className="block font-bold">Timelines</span>
                        <span className="">45 days completion*</span>
                    </div>
                </div>
                <div className="mt-4">
                    <div className={styles.grid_text}>
                        <span className="block font-bold">Quality</span>
                        <ul className="list-disc mx-4">
                                    <li>Pre-approved Branded materials</li>
                                    <li>Onsite work if client requires</li>
                                    <li>Stringent Quality Control process</li>
                                    <li>Can also visit factory to verify quality directly</li>
                                </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <div className={styles.grid_text}>
                        <span className="block font-bold">Warranty</span>
                        <span className="">Up to 10 year warranty*</span>
                    </div>
                </div>
                <div className="mt-4">
                    <div className={styles.grid_text}>
                        <span className="block font-bold">After Sales Support</span>
                        <ul className="list-disc mx-4">
                        <li>Immediate response</li>
                                    <li>Direct access to all stake holders</li>
                                    <li>Personal connection with Management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdvantagesGrid;