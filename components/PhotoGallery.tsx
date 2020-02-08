import React, { FunctionComponent, useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { photos } from '../content/gallery'

const PhotoGallery: FunctionComponent = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Gallery
        direction="row"
        targetRowHeight={containerWidth => {
          if (containerWidth > 1280) {
            return 500
          } else if (containerWidth > 768) {
            return 400
          }
          return 300
        }}
        photos={photos}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <style jsx global>{`
        .react-images__view-image {
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </div>
  )
}

export default PhotoGallery
