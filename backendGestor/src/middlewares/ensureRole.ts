import { Request, Response, NextFunction } from 'express';

export function ensurePro(req: Request, res: Response, next: NextFunction) {
  const role = req.user?.role;

  if (!role) {
    return res.status(401).json({ error: 'Role não fornecida' });
  }

  if (role !== 'PRO') {
    return res.status(403).json({ error: 'Acesso negado' });
  }
  next();
}
