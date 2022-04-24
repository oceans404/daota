with tokenTransfers as (
    select contract_address, "from", "to", count(*) as c
    FROM erc20."ERC20_evt_Transfer" tr
    where "contract_address" ='\x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8'
    group by "from", "contract_address", "to"
)

select * from tokenTransfers
where "from"='\x74de5d4fcbf63e00296fd95d33236b9794016631'
and c > 5