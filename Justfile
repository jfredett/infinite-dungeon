word-count:
    find lore/ -type f -exec wc -w {} \; | cut -f 1 -d ' ' | paste -sd+ | bc
