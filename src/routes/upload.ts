import { FastifyInstance } from 'fastify'
import cloudinary from './../../cloudinary'

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (req, reply) => {
    const upload = await req.file({
      limits: {
        fileSize: 5_242_880, // 5mb
      },
    })

    if (!upload) {
      return reply.status(400).send({ error: 'No file uploaded' })
    }
    const mimeTypeRegex =
      /^(image|video)\/(jpeg|jpg|png|gif|webp|bmp|mp4|avi|mov|wmv|mkv)$/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) {
      return reply.status(400).send({ error: 'Invalid file format' })
    }

    try {
      const uploadResult = await new Promise<UploadResult>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            (error, result) => {
              if (error) {
                reject(error)
              } else {
                resolve(result as UploadResult)
              }
            }
          )

          upload.file.pipe(uploadStream)
        }
      )

      return { fileUrl: uploadResult.secure_url }
    } catch (error) {
      return reply.status(500).send({ error: 'Upload failed' })
    }
  })
}
