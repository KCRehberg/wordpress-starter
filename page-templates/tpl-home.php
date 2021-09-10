<?php

/**
 * Template Name: Home Template
 *
 * @link https://developer.wordpress.org/themes/template-files-section/page-template-files/
 *
 * @package awps
 */

get_header();

?>

<main class="flex">
    <aside>
        <?php
        if (has_nav_menu('primary')) :
            wp_nav_menu(
                array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'walker'         => new Awps\Core\WalkerNav(),
                )
            );
        endif;
        ?>
    </aside>
    <section>
        
    </section>
</main>

<?php
get_footer();
