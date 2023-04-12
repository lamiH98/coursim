import React, { useState } from 'react'
import './_instructorTabs.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row'

const InstructorTabs: React.FC = () => {
	
	const [key, setKey] = useState<any>('home');

  return (
    <Row>
			<Tabs
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(key) => setKey(key)}
				className="mb-3 tabs"
			>
				<Tab eventKey="home" title="Become an Instructor">
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
					<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
				</Tab>
				<Tab eventKey="Instructor Rules" title="Instructor Rules">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae aut, odit, adipisci, nihil laudantium facere ipsa hic expedita architecto at soluta vel recusandae in ratione? Enim, expedita? Consectetur veniam nam incidunt voluptas. Enim, vero cumque.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo aliquam maiores error corrupti laboriosam ad voluptates et? Recusandae fugit itaque nostrum temporibus molestias, omnis unde illum molestiae eos sed reprehenderit, amet repudiandae laudantium culpa accusamus delectus reiciendis ratione, enim impedit. Cumque exercitationem alias explicabo ad similique aliquam facere reiciendis iure maiores dolore, officia quos, laborum consequatur cum pariatur cupiditate animi incidunt et. Inventore, nisi? Nulla nobis illo enim optio amet numquam praesentium laboriosam quia. Error, accusamus quas neque accusantium in, ea quae beatae tenetur reiciendis ab aliquid? Sit, nesciunt.</p>
				</Tab>
				<Tab eventKey="Start with Courses" title="Start with Courses">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque quidem eius sapiente ut eaque fugiat, incidunt rerum libero modi, exercitationem porro sit consequatur voluptatum alias officia deleniti vel, enim voluptas! Perspiciatis facilis tenetur vero consequatur deserunt. Modi, maiores ducimus. Alias dolores, corporis aut impedit possimus non debitis consequatur aliquam minus explicabo distinctio, omnis voluptate officiis eum, vel delectus facilis!</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat obcaecati ducimus, placeat voluptas impedit unde sint esse atque? In, incidunt magnam necessitatibus nobis perferendis quo.</p>
				</Tab>
			</Tabs>
		</Row>
  )
}

export default InstructorTabs