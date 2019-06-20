import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Fabcar extends ConvectorModel<Fabcar> {
  @ReadOnly() @Required()
  public readonly type = 'io.worldsibu.fabcar';

  // Make should not change 
  @ReadOnly() @Required()
  @Validate(yup.string())
  public make: string;

  // Model should not change 
  @ReadOnly() @Required() @Validate(yup.string())
  public model: string;

  // Color of the car may change
  @Required() @Validate(yup.string())
  public colour: string;

  // Owner of the car
  @Required() @Validate(yup.string())
  public owner: string;
}
