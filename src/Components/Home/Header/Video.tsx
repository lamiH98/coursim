import React, { useState } from 'react'
import { BsPlay } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import { BiLoaderAlt } from 'react-icons/bi'
import './_video_modal.scss'

const Video: React.FC = () => {
	
  const [modal, setModal] = useState<boolean>(false);
  const [videoLoading, setVideoLoading] = useState<boolean>(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div>
			<div className="watch-video" onClick={openModal}>
				<span className="icon"><BsPlay className='icon-player' /></span>
				<span className='watch-text'>Watch Video</span>
				{modal ? (
					<section className="modal__bg">
						<div className="modal__align">
							{/*  modal={modal} */}
							<div className="modal__content">
								<GrFormClose
									className="modal__close"
									arial-label="Close modal"
									onClick={() => setModal}
								/>
								<div className="modal__video-align">
									{videoLoading ? (
										<div className="modal__spinner">
											<BiLoaderAlt
												className="modal__spinner-style"
												// fadeIn="none"
											/>
										</div>
									) : null}
									<iframe
										className="modal__video-style"
										onLoad={spinner}
										loading="lazy"
										width="800"
										height="500"
										src="https://www.youtube.com/embed/0r1jVCGwHkU"
										title="YouTube video player"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>
					</section>
				) : null}
			</div>
		</div>
  )
}

export default Video