import { Request, Response, NextFunction } from 'express'

export const herokuSSLRedirect = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (
            process.env.NODE_ENV === 'production' &&
            req.headers['x-forwarded-proto'] !== 'https' // Heroku 사용 환경에서만 동작
        ) {
            return res.redirect(
                301,
                'https://' + req.hostname + req.originalUrl,
            )
        }
        return next()
    }
}
