import styles from './Project.module.css';
function DifferentTable() {
    return (
        <>
            <table className={`${styles.projects_table} table-auto border-separate border-spacing-2 mx-auto mt-8`}>
                <thead>
                    <tr>
                        <th></th>
                        <th className="bg-[#323232] text-white">Project Management Contract</th>
                        <th className="bg-[#cda17c]">Construction Contract</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.side_table_heading}>Costing</td>
                        <td className={styles.gray_col_content}>
                            <ul className="list-disc mx-4">
                                <li>Transparent Project Management fee % given upfront to Clients</li>
                                <li>Project Management fee based on built up area</li>
                                <li>Once floor plans are final, exact fee amount is fixed irrespective of total project cost</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>
                            <ul className="list-disc mx-4 ">
                                <li>Contractor profit % will be on total project cost</li>
                                <li>With any increase in project cost due to premium materials, contractor profit is added</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Customization</td>
                        <td className={styles.gray_col_content}>
                            <ul className="list-disc mx-4">
                                <li>Fully customizable at every stage</li>
                                <li>Free to choose all materials </li>
                                <li>Unlimited changes and additions can be made at any stage of construction</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>
                            <ul className="list-disc mx-4 ">
                                <li>Limited customization allowed only in the planning stage</li>
                                <li>Fixed budget for every material</li>
                                <li>Changes are discouraged once construction starts</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Payment</td>
                        <td className={styles.gray_col_content}>
                            <ul className="list-disc mx-4">
                                <li>Smaller periodic payments </li>
                                <li>More control over expenses</li>
                            </ul>
                        </td>
                        <td className={styles.light_col_content}>
                            <ul className="list-disc mx-4 ">
                                <li>Large stagewise payments</li>
                                <li>Expenses are part of contract amount</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.side_table_heading}>Ideal for</td>
                        <td className={styles.gray_col_content}>Clients who are looking for more customization and freedom to select materials</td>
                        <td className={styles.light_col_content}>Clients whose priority is pre fixed specification and budget</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}
export default DifferentTable;