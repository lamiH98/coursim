import React from 'react'
import { VscCircleFilled } from 'react-icons/vsc';
import Breadcrumb from '../../Components/Utility/Breadcrumb/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './_conditions.scss'

const Conditions: React.FC = () => {
  return (
    <div className='conditions'>
			<Breadcrumb>
				<>
					<VscCircleFilled className='icon' />
					<li className='active'>Term Conditions</li>
				</>
			</Breadcrumb>
			<Container>
				<Row>
					<Col>
						<div className="conditions-title text-center">
							<h2 className="title">Terms & Conditions</h2>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni sint recusandae officiis!</p>
						</div>
					</Col>
				</Row>
				<div className='conditions-content'>
					<h5>Using our services</h5>
					<p>You must follow any policies made available to you within the Services. Don’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct. Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don’t remove, obscure, or alter any legal notices displayed in or along with our Services.</p>
				</div>
				<div className='conditions-content'>
					<h5>Your content in our services</h5>
					<p>When you upload, submit, store, send or receive content to or through our Services, you give Front (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones. This license continues even if you stop using our Services (for example, for a business listing you have added to Front Maps). Some Services may offer you ways to access and remove content that has been provided to that Service. Also, in some of our Services, there are terms or settings that narrow the scope of our use of the content submitted in those Services.</p>
				</div>
				<div className='conditions-content'>
					<h5>Pay Attention</h5>
					<p>Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use.</p>
				</div>
			</Container>
		</div>
	)
}

export default Conditions