with tokenTransfers as (
    select contract_address, "from", "to", count(*)
    FROM erc20."ERC20_evt_Transfer" tr
    where "contract_address" ='\x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8'
    group by "from", "contract_address", "to"
)

select * from tokenTransfers
where "from"='\x00000000003b3cc22af3ae1eac0440bcee416b40'
