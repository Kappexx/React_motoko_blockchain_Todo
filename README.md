my publick key : wptol-bsown-srk4h-kvdzk-bsdlf-oyzo6-nnrgx-4u2py-yn7ot-mejl3-5ae

token canister id bw4dl-smaaa-aaaaa-qaacq-cai

CANISTER_PUBLIC_KEY="principal \"$(\dfx canister id Token)\""

dfx canister call Token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
