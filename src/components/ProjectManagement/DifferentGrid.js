import styles from './Project.module.css';
function DifferentGrid()
{
    return(
        <>
            <div className="flex flex-col justify-center mt-8">
                <div className="">
                    <div className={styles.heading_text}>
                        <span className="block text-[28.3721px] md:text-[54.2px]">Project Management Contract</span>
                    </div>
                    <div className={styles.content_text}>
                        <span className={styles.content_heading}>Costing</span>
                        <ul className="list-disc text-[#323232] mx-4">
                            <li>Transparent project management fee % given upfront to clients</li>
                            <li>Project management fee based on built up area</li>
                            <li>Once floor plans are final, exact fee amount is fixed irrespective of total project cost</li>
                        </ul>
                    </div>
                    <div className={styles.content_text}>
                        <span className={styles.content_heading}>Customization</span>
                        <ul className="list-disc text-[#323232] mx-4">
                            <li>Fully customizable at every stage</li>
                            <li>Free to choose all materials </li>
                            <li>Unlimited changes and additions can be made at any stage of construction</li>
                        </ul>
                    </div>
                    <div className={styles.content_text}>
                        <span className={styles.content_heading}>Payment</span>
                        <ul className="list-disc text-[#323232] mx-4">
                            <li>Smaller periodic payments </li>
                            <li>More control over expenses</li>
                        </ul>
                    </div>
                    <div className={`${styles.content_text} text-[#323232] my-2`}>
                        <span className={styles.content_heading}>Ideal for</span>
                        <span className="">Clients who are looking for more customization and freedom to select materials</span>
                    </div>
                </div>
                <div className="mt-8">
                    <div className={styles.heading_text}>
                        <span className="block text-[28.3721px] md:text-[54.2px]">Construction Contract</span>
                    </div>
                    <div className={styles.content_text}>
                        <ul className="list-disc mx-4 text-[#323232]">
                                    <li>Limited customization allowed only in the planning stage</li>
                                    <li>Fixed budget for every material</li>
                                    <li>Changes are discouraged once construction starts</li>
                        </ul>
                    </div>
                    <div className={styles.content_text}>
                        <span className={styles.content_heading}>Costing</span>
                        <ul className="list-disc text-[#323232] mx-4">
                            <li>Large stagewise payments</li>
                            <li>Expenses are part of contract amount</li>
                        </ul>
                    </div>
                    <div className={styles.content_text}>
                        <span className={styles.content_heading}>Payment</span>
                        <span className="">Clients whose priority is pre fixed specification and budget</span>
                    </div>
                    <div className={`${styles.content_text} text-[#323232] my-2`}>
                        <span className={styles.content_heading}>Ideal for</span>
                        <ul className="list-disc text-[#323232] mx-4">
                            <li>Contractor profit % will be on total project cost</li>
                            <li>With any increase in project cost due to premium materials, contractor profit is added</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DifferentGrid;