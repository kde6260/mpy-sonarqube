const field = require('../codes/field');
const uniqid = require('uniqid');

async function create(ctx, next){
    try{
        let date = Date.now();
        let message = {
            uuid: uniqid(field.orgUidprefix),
            kee: ctx.request.body.username + field.orgDefaultKee ,
            name: ctx.request.body.username,
            createdAt: date,
            updatedAt: date
        };
        let org = ctx.state.db.organization;
        if(ctx.state.t){
            let createdOrg = await ctx.state.t.batch([
                org.createInBatch(message, ctx.state.t)
            ]);
            ctx.state.createdOrg = createdOrg;
        }
        else await org.create(message);
        await next();
    }catch(err){
        ctx.throw(500, new Error('CreateOrganizationError:' +err.message));
    }
}

module.exports = {
    create
};




