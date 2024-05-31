import { Card } from 'antd'
import React from 'react'
import "../styles/DueAssignments.css"

const DueAssignment = () => {
    return (
        <>
            <div >
                <Card
                    title="Card title"
                    bordered={false}
                    className="card-container"
                    style={{
                        width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        </>
    )
}

export default DueAssignment