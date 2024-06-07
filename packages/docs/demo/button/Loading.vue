<template>
    <div>
        <m-button type="primary" loading> Loading </m-button>
        <m-button type="primary" loading-icon="circle-notch" loading>
            Loading
        </m-button>
        <m-button type="primary" loading>
            <template #loading>
                <m-icon style="margin-right: 6px" icon="star" spin />
            </template>
            Loading
        </m-button>
    </div>
</template>
