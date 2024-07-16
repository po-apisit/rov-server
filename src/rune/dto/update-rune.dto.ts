import { PartialType } from '@nestjs/mapped-types';
import { CreateRuneDto } from './create-rune.dto';

export class UpdateRuneDto extends PartialType(CreateRuneDto) {}
