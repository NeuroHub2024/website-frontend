import React from 'react';
import { Avatar, Layout, Space, Typography, theme } from 'antd';
const { Content, Footer } = Layout;
import "../styles/Assignment.css"
import UploadAssignmentComponent from "../components/UploadAssignmentComponent.jsx"

const Assignment = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>

            <Layout>

                <Content
                    style={{
                        margin: '16px 16px',
                    }}
                >

                    {/* <Typography.Text><h4>Assignment</h4></Typography.Text> */}
                    <div

                        className='assignment-container'
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                        }}
                    >
                        <div className="assignment-description-container">
                            <Typography.Title level={3}>Assignment Description</Typography.Title>
                            <Typography.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit maiores in animi nam aspernatur aliquam eveniet rem natus fuga officia accusamus minus neque, nesciunt id hic. Odit, aliquam? Maxime dolore aut at nemo adipisci vitae natus quo mollitia sint, a voluptates repellendus nihil perferendis ad voluptate quas debitis assumenda explicabo minus corrupti doloribus voluptatum fugit illo! Reiciendis maiores nam ducimus aliquam iusto debitis dolor sit. Vitae numquam velit asperiores praesentium laborum, enim repudiandae nihil earum architecto aliquid ducimus optio suscipit repellat voluptatum soluta tenetur distinctio. Sunt quidem laborum iste minus exercitationem ad quae aspernatur harum eius! Quam consequatur architecto rem eos ratione esse fugit? Alias veritatis accusantium id magnam perferendis officiis facilis fugit delectus dolorum quas perspiciatis distinctio omnis et, provident voluptate repellat sequi ullam pariatur illo maiores ratione natus autem! Ipsum distinctio, vitae vero modi voluptatem consequuntur, deleniti accusamus non consequatur quae labore dolorem eos beatae obcaecati in iste facere ducimus unde! Eum sapiente officiis optio quisquam voluptates veniam inventore nulla culpa. Dolorem iste commodi rerum eligendi, voluptatem at quibusdam eum rem. Eaque cum, illo quae enim beatae neque ipsum perferendis earum reprehenderit unde ratione deleniti adipisci nulla placeat accusamus nihil esse dolore nostrum facilis error at magni, officiis sapiente! Veniam architecto laborum, natus esse aut quod autem illo similique molestiae, ipsam suscipit officiis corporis repellat voluptatibus
                            </Typography.Text>
                        </div>
                        <div className="assignment-upload-container">
                            <UploadAssignmentComponent />
                        </div>

                    </div>
                </Content>
            </Layout>

        </>
    )
}

export default Assignment