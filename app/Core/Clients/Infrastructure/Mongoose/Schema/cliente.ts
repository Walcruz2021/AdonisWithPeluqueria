import { Schema } from 'mongoose'

export const ClienteSchema: Schema = new Schema({
  name: { type: String, require: true },
  // nameDog:{type:String,require:true},
  phone: { type: Number, require: true },
  address: { type: String, require: true },
  notesCli: { type: String, require: true },
  turnos: [{ type: Schema.Types.ObjectId, ref: 'Turno' }],
  pedidos: [{ type: Schema.Types.ObjectId, ref: 'Venta' }],
  perros: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Perro',
      nameDog: String
    }
  ],
  status: { type: Boolean, default: true }
})
