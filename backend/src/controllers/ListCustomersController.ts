import { FastifyRequest, FastifyReply } from 'fastify'
import { ListCustomersService } from '../services/CreateCustomerService'

class ListCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const ListCustomersService = new ListCustomersService();

        const customers = await ListCustomersService.execute();

        reply.send(customers);
    }
}

export { ListCustomersController }
