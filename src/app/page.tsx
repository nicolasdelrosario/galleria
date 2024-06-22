'use client'

import { useEffect, useState } from 'react'
import { getArtworks, getArtwork } from '@/services/artwork.data.service'
import { getArtworkImage } from '@/services/artwork.image.services'

import {
	getArtworkController,
	getArtworksController,
} from '@/controllers/artwork.controller'
import { Gallery } from '@/components'

export default function Page() {
	const [imageUrl, setImageUrl] = useState('')

	useEffect(() => {
		const fetchArtworks = async () => {
			const response = await getArtworks(1, 10)
			const imageUrl = await getArtworkImage(response[1].image_id)
			const artwork = await getArtwork(response[0].id)

			const ARTWORKS = await getArtworksController(1, 14)
			const ARTWORK = await getArtworkController(response[0].id)

			console.log('Lista de artworks', ARTWORKS)
			console.log('Artwork', ARTWORK)

			setImageUrl(imageUrl)
		}

		fetchArtworks()
	}, [])

	return (
		<>
			{/* Este es un mensaje */}
			{/* <img src={imageUrl} alt='' /> */}
			<Gallery />
		</>
	)
}
