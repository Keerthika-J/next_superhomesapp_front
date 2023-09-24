import styles from "./Interior.module.css";

function Table() {
    return (
        <>
            <table className={`${styles.interior_table} table-auto border-separate border-spacing-2 mx-auto mt-8`}>
                <thead>
                    <tr>
                        <th></th>
                        <th className="bg-[#323232] text-white">SuperHomes</th>
                        <th className="bg-[#cda17c]">Online Startups</th>
                        <th className="bg-[#cda17c]">Local Contractors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.side_table_heading}>Pricing</td>
                        <td className={styles.gray_col_content}>Upfront full cost transparency</td>
                        <td className={styles.light_col_content}>Unwanted Add ons will inflate cost</td>
                        <td className={styles.light_col_content}>Hidden costs after work starts</td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Designs</td>
                        <td className={styles.gray_col_content}>
                            <ul className="list-disc mx-4">
                                <li>Fully Personalized designs</li>
                                <li>3D visuals</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>Only Fixed templates to choose from</td>
                        <td className={styles.light_col_content}>Limited design knowledge</td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Designers</td>
                        <td className={styles.gray_col_content}>
                            <ul className="list-disc mx-4">
                                <li>Experienced designers</li>
                                <li>Vast Knowledge of form and functionality</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>
                            <ul className="list-disc mx-4 text-black">
                                <li>Inexperienced freshers</li>
                                <li>Are allowed to only follow templates</li>
                            </ul></td>
                        <td className={styles.light_col_content}>No designers</td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Timelines</td>
                        <td className={styles.gray_col_content}>45 days completion*</td>
                        <td className={styles.light_col_content}>45 days completion*</td>
                        <td className={styles.light_col_content}>No reliable timeframes</td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Quality</td>
                        <td className={styles.gray_col_content}>
                            <ul className="list-disc mx-4">
                                <li>Pre-approved Branded materials</li>
                                <li>Onsite work if client requires</li>
                                <li>Stringent Quality Control process</li>
                                <li>Can also visit factory to verify quality directly</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>
                            <ul className="list-disc mx-4 text-black">
                                <li>Branded materials</li>
                                <li>Outsourced to random factories</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>
                            <ul className="list-disc mx-4 text-black">
                                <li>Low quality materials to cut costs</li>
                                <li>No quality control process</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Warranty</td>
                        <td className={styles.gray_col_content}>Up to 10 year warranty*</td>
                        <td className={styles.light_col_content}>Up to 10 year warranty*</td>
                        <td className={styles.light_col_content}>No Warranty</td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>After Sales Support</td>
                        <td className={styles.gray_col_content}>
                            <ul className="list-disc mx-4">
                                <li>Immediate response</li>
                                <li>Direct access to all stake holders</li>
                                <li>Personal connection with Management</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>Only call center support</td>
                        <td className={styles.light_col_content}>No after sales support system</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Table;