# -*- coding: utf-8 -*-
from __future__ import absolute_import
from __future__ import unicode_literals
import pandas as pd


def jaccard(e1, e2):
    """
    ジャッカード指数を計算する
    :param e1: list of int
    :param e2: list of int
    :rtype: float
    """
    set_e1 = set(e1)
    set_e2 = set(e2)
    return float(len(set_e1 & set_e2)) / float(len(set_e1 | set_e2))


def get_key(k):
    return 'JACCARD:PRODUCT:{}'.format(k)

# 商品Xを購入した顧客IDが1,3,5ということ
product_x = [1, 3, 5]
product_a = [2, 4, 5]
product_b = [1, 2, 3]
product_c = [2, 3, 4, 7]
product_d = [3]
product_e = [4, 6, 7]

# 商品データ（ここに商品を記録する）
products = {
    'X': product_x,
    'A': product_a,
    'B': product_b,
    'C': product_c,
    'D': product_d,
    'E': product_e,
}
df = pd.DataFrame(index=['X', 'A', 'B', 'C', 'D', 'E'], columns=['val'])
r = products

# ジャッカード指数を計算して記録する
for key in products:
    base_customers = products[key]
    for key2 in products:
        if key == key2:
            df['val'][key] = 0
            continue
        target_customers = products[key2]
        # ジャッカード指数を計算
        j = jaccard(base_customers, target_customers)
        df['val'][key2] = j
    exec(f'df_{key} = df')

# 例1 商品Aを買った人はこんな商品も買っています。
print (df_A.sort_values('val', ascending=False)[:3])
# > ['B', 'D', 'A']
