import { AppError } from '../../../utils/AppError';
import bcrypt from 'bcrypt';
import { usersRepository } from '../../../repositories/usersRepository';
import jwt from 'jsonwebtoken';

interface ILoginResponse {
  token: string;
  email: string;
  name: string;
}

export class LoginService {
  constructor(private userRepo: usersRepository) {}

  async execute(email: string, password: string): Promise<ILoginResponse> {
    const user = await this.userRepo.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect', 401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', 401);
    }

    return {
      token: jwt.sign({ email: user.email }, process.env.JWT_SECRET!, {
        expiresIn: '1d',
      }),
      email: user.email,
      name: user.name,
    };
  }
}
